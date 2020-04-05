import { Weather } from 'models/app';
import { appStore } from '../store/app';
import { utils } from '../utils/index';

class WeatherApi {
  async getCurrentForecast() {
    const { cityName, apiKey } = appStore;
    const urlCurrentWeather = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ apiKey }&units=metric`);
    const currentWeather = await urlCurrentWeather.json();
    const sizeIcon = '96';
    const weather: Weather = {
      celsiusTemp: Math.round(currentWeather.main.temp),
      fahrenheitTemp: Math.round((currentWeather.main.temp * 9/5) + 32),
      celsiusFeelsLike: Math.round(currentWeather.main.feels_like),
      fahrenheitFeelsLike: Math.round(currentWeather.main.feels_like * 9/5) + 32,
      pressureInMmhg: Math.round(currentWeather.main.pressure / 1.333),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      weatherDescription: currentWeather.weather[0].description,
      weatherIconUrl: utils.getWeatherDescription(currentWeather.weather[0].description, sizeIcon),
      windSpeed: parseFloat(currentWeather.wind.speed).toFixed(1),
      windDeg: Math.round(currentWeather.wind.deg),
      sunrise: new Date(currentWeather.sys.sunrise * 1000).toLocaleDateString(),
      sunset: new Date(currentWeather.sys.sunset * 1000).toLocaleDateString(),
      cod: currentWeather.cod,
    };
  return weather;
  };
};

export const weatherApi = new WeatherApi();