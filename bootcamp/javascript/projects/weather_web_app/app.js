class WeatherApp {
  constructor() {
    this.locationAddress = "";
    this.apikey = "4LQZFGMW2ZWSNVH7TZNAKCTEG";
    this.apiUrl =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    this.historyKey = "weather_search_history";
    this.maxHistory = 10;
    this.unit = localStorage.getItem("weather_unit") || "C"; // "C" or "F"
    this.lastWeatherData = null;
  }
  init() {
    const locationInput = document.getElementById("location");
    locationInput.addEventListener(
      "keyup",
      this.handleLocationSearch.bind(this)
    );

    // Add geolocation button event listener
    const geoBtn = document.getElementById("geo-btn");
    if (geoBtn) {
      geoBtn.addEventListener("click", this.handleGeoLocation.bind(this));
    }

    const toggleBtn = document.getElementById("toggle-unit");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        this.toggleUnit();
        if (this.lastWeatherData) {
          this.displayWeatherData(this.lastWeatherData);
        }
      });
      this.updateUnitLabel();
    }

    // Add clear history button event listener
    const clearBtn = document.getElementById("clear-history-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        this.clearSearchHistory();
      });
    }

    // Render search history on load
    this.renderSearchHistory();
  }

  clearSearchHistory() {
    localStorage.removeItem(this.historyKey);
    this.renderSearchHistory();
  }

  async handleGeoLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.locationAddress = `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
        const url = `${this.apiUrl}${lat},${lon}?key=${this.apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        const weatherFilterData = this.filterWeatherData(data);
        this.displayWeatherData(weatherFilterData);
      },
      (error) => {
        alert("Unable to retrieve your location.");
      }
    );
  }
  toggleUnit() {
    this.unit = this.unit === "C" ? "F" : "C";
    localStorage.setItem("weather_unit", this.unit);
    this.updateUnitLabel();
  }

  updateUnitLabel() {
    const label = document.getElementById("unit-label");
    if (label) label.textContent = this.unit === "C" ? "°C" : "°F";
  }
  handleLocationSearch(event) {
    const locationInput = document.getElementById("location");
    const locationValue = locationInput.value.trim();
    this.locationAddress = locationValue;
    if (event.key === "Enter") {
      this.fetchWeatherData(locationValue);
    }
  }

  async fetchWeatherData(location) {
    if (location === "") {
      alert("Please enter a location");
      return;
    }
    if (location.length < 3) {
      alert("Location must be at least 3 characters long");
      return;
    }
    // Save to search history
    this.saveToHistory(location);
    const url = `${this.apiUrl}${location}?key=${this.apikey}`;
    let response, data;
    try {
      response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found or API error");
      }
      data = await response.json();
      // Visual Crossing returns an error object sometimes
      if (data && data.code && data.message) {
        throw new Error(data.message);
      }
    } catch (err) {
      this.displayError(err.message || "Could not fetch weather data.");
      return;
    }
    const weatherFilterData = this.filterWeatherData(data);
    this.displayWeatherData(weatherFilterData);
  }

  displayError(message) {
    const weatherContainer = document.getElementById("weather-data");
    weatherContainer.innerHTML = `<div class="text-red-600 font-semibold p-4 bg-red-100 rounded-xl animate-fade-in-up">${message}</div>`;
  }
  saveToHistory(location) {
    if (!location || location.startsWith("Lat:")) return; // Don't save geolocation as text
    let history = JSON.parse(localStorage.getItem(this.historyKey)) || [];
    // Remove if already exists
    history = history.filter(
      (item) => item.toLowerCase() !== location.toLowerCase()
    );
    // Add to front
    history.unshift(location);
    // Limit history
    if (history.length > this.maxHistory)
      history = history.slice(0, this.maxHistory);
    localStorage.setItem(this.historyKey, JSON.stringify(history));
    this.renderSearchHistory();
  }

  renderSearchHistory() {
    const historyList = document.getElementById("search-history");
    if (!historyList) return;
    let history = JSON.parse(localStorage.getItem(this.historyKey)) || [];
    historyList.innerHTML = "";
    if (history.length === 0) {
      historyList.innerHTML =
        '<li class="text-gray-400">No recent searches</li>';
      return;
    }
    history.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<button class="px-3 py-1 rounded-xl bg-cyan-100 hover:bg-cyan-200 text-indigo-700 font-medium transition" title="Search again">${item}</button>`;
      li.querySelector("button").addEventListener("click", () => {
        document.getElementById("location").value = item;
        this.fetchWeatherData(item);
      });
      historyList.appendChild(li);
    });
  }

  filterWeatherData(data) {
    const temperatureF = data.currentConditions.temp;
    let temperature = temperatureF;
    if (this.unit === "C") {
      temperature = ((temperatureF - 32) * 5) / 9;
    }
    const windSpeed = data.currentConditions.windspeed;
    let likelyhoodOfRain = "None";
    if (
      Array.isArray(data.currentConditions.preciptype) &&
      data.currentConditions.preciptype.length > 0
    ) {
      likelyhoodOfRain = data.currentConditions.preciptype.join(", ");
    }
    const generalWeather = data.currentConditions.conditions;
    // Save for toggling
    this.lastWeatherData = {
      temperatureF,
      windSpeed,
      likelyhoodOfRain,
      generalWeather,
    };
    return {
      temperature,
      temperatureF,
      windSpeed,
      likelyhoodOfRain,
      generalWeather,
    };
  }
  displayWeatherData(weatherData) {
    const weatherContainer = document.getElementById("weather-data");
    let temperature = weatherData.temperature;
    if (this.unit === "F" && weatherData.temperatureF !== undefined) {
      temperature = weatherData.temperatureF;
    } else if (this.unit === "C" && weatherData.temperatureF !== undefined) {
      temperature = ((weatherData.temperatureF - 32) * 5) / 9;
    }
    const tempUnit = this.unit === "C" ? "°C" : "°F";

    // Improved icon selection logic for more accurate weather representation
    // See https://www.visualcrossing.com/resources/documentation/weather-api/understanding-weather-condition-codes/ for possible conditions
    let svgIcon = "";
    const weather = (weatherData.generalWeather || "").toLowerCase();
    if (
      weather.includes("thunder") ||
      weather.includes("storm") ||
      weather.includes("lightning")
    ) {
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/thunder.svg" alt="Thunderstorm" style="width:100px;height:100px;" />`;
    } else if (
      weather.includes("snow") ||
      weather.includes("sleet") ||
      weather.includes("blizzard")
    ) {
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/snowy-1.svg" alt="Snowy" style="width:100px;height:100px;" />`;
    } else if (
      weather.includes("rain") ||
      weather.includes("drizzle") ||
      weather.includes("shower")
    ) {
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-1.svg" alt="Rainy" style="width:100px;height:100px;" />`;
    } else if (
      weather.includes("fog") ||
      weather.includes("mist") ||
      weather.includes("haze") ||
      weather.includes("smoke")
    ) {
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/fog.svg" alt="Foggy" style="width:100px;height:100px;" />`;
    } else if (weather.includes("cloud") || weather.includes("overcast")) {
      // Try to distinguish between partly cloudy and fully cloudy
      if (weather.includes("partly") || weather.includes("few")) {
        svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg" alt="Partly Cloudy" style="width:100px;height:100px;" />`;
      } else {
        svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg" alt="Cloudy" style="width:100px;height:100px;" />`;
      }
    } else if (
      weather.includes("clear") ||
      weather.includes("sun") ||
      weather.includes("fair")
    ) {
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg" alt="Sunny" style="width:100px;height:100px;" />`;
    } else if (weather.includes("night")) {
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/night.svg" alt="Night" style="width:100px;height:100px;" />`;
    } else {
      // Fallback: show a question mark or default sunny
      svgIcon = `<img src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg" alt="Weather" style="width:100px;height:100px;" />`;
    }

    const iconHtml = svgIcon;

    const weatherHtml = `
      ${iconHtml}
      <h2 class="text-3xl text-bold mt-2">Weather Data for <span class="capitalize">${
        this.locationAddress
      }</span></h2>
      <p class="text-7xl font bold">${temperature.toFixed(1)} ${tempUnit}</p>
      <p>Wind Speed: ${weatherData.windSpeed} km/h</p>
      <p>Likelyhood of Rain: ${weatherData.likelyhoodOfRain} </p>
      <p>General Weather: ${weatherData.generalWeather}</p>
    `;
    weatherContainer.innerHTML = weatherHtml;
  }
}
const app = new WeatherApp();
app.init();
