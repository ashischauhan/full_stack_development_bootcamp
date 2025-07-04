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
    const temperature = data.currentConditions.temp;
    const windSpeed = data.currentConditions.windspeed;
    const likelyhoodOfRain = data.currentConditions.perciptype || "None";
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
    <h2>Weather Data for ${this.locationAddress}</h2>
    <p>Temperature: ${weatherData.temperature} °F</p>
    <p>Wind Speed: ${weatherData.windSpeed} km/h</p>
    <p>Likelyhood of Rain: ${weatherData.likelyhoodOfRain} </p>
    <p>General Weather: ${weatherData.generalWeather}</p>
    `;
    weatherContainer.innerHTML = weatherHtml;
  }
}
const app = new WeatherApp();
app.init();
