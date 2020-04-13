import { Weather } from 'models/app';
import { utils } from '../utils/index';

class WeatherApi {
  async getCurrentForecast(cityName: string, apiKey: string) {
    const urlCurrentWeather = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ apiKey }&units=metric`);
    const currentWeather = await urlCurrentWeather.json();
    const windDeg = Math.round(currentWeather.wind.deg);
    const windForce = parseFloat(currentWeather.wind.speed);
    const weatherDescription = currentWeather.weather[0].description
    const sizeIcon = '96';
    const weather: Weather = {
      celsiusTemp: Math.round(currentWeather.main.temp),
      fahrenheitTemp: Math.round((currentWeather.main.temp * 9/5) + 32),
      celsiusFeelsLike: Math.round(currentWeather.main.feels_like),
      fahrenheitFeelsLike: Math.round(currentWeather.main.feels_like * 9/5) + 32,
      pressureInMmhg: Math.round(currentWeather.main.pressure / 1.333),
      humidity: currentWeather.main.humidity + '%',
      dateTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      weatherDescription: weatherDescription,
      weatherIconUrl: utils.setWeatherIcon(weatherDescription, sizeIcon),
      windForce: windForce,
      windVerbalDesignation: utils.setWindVerbalDesignation(windForce),
      windDirection: utils.setWindDirection(windDeg),
      sunrise: new Date(currentWeather.sys.sunrise * 1000).toLocaleDateString(),
      sunset: new Date(currentWeather.sys.sunset * 1000).toLocaleDateString(),
      cod: currentWeather.cod,
    };
  return weather;
  };
};

export const weatherApi = new WeatherApi();