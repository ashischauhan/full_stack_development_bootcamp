class WeatherApp {
  constructor() {
    this.locationAddress = "";
    this.apikey = "4LQZFGMW2ZWSNVH7TZNAKCTEG";
    this.apiUrl =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  }
  init() {
    const locationInput = document.getElementById("location");
    locationInput.addEventListener(
      "keyup",
      this.handleLocationSearch.bind(this)
    );
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
    const url = `${this.apiUrl}${location}?key=${this.apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    const weatherFilterData = this.filterWeatherData(data);
    this.displayWeatherData(weatherFilterData);
  }

  filterWeatherData(data) {
    // Convert temperature from Fahrenheit to Celsius
    const temperatureF = data.currentConditions.temp;
    const temperature = ((temperatureF - 32) * 5) / 9;
    const windSpeed = data.currentConditions.windspeed;
    // Fix: Use correct property name and handle array
    let likelyhoodOfRain = "None";
    if (Array.isArray(data.currentConditions.preciptype) && data.currentConditions.preciptype.length > 0) {
      likelyhoodOfRain = data.currentConditions.preciptype.join(", ");
    }
    const generalWeather = data.currentConditions.conditions;
    return {
      temperature,
      windSpeed,
      likelyhoodOfRain,
      generalWeather,
    };
  }
  displayWeatherData(weatherData) {
    const weatherContainer = document.getElementById("weather-data");
    const weatherHtml = `
    <h2 class="text-3xl text-bold">Weather Data for <span class="capitalize">${this.locationAddress}</span></h2>
    <p class="text-7xl font bold">${weatherData.temperature.toFixed(1)} °C</p>
    <p>Wind Speed: ${weatherData.windSpeed} km/h</p>
    <p>Likelyhood of Rain: ${weatherData.likelyhoodOfRain} </p>
    <p>General Weather: ${weatherData.generalWeather}</p>
    `;
    weatherContainer.innerHTML = weatherHtml;
  }
}
const app = new WeatherApp();
app.init();
