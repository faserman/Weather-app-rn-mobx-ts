import { AllDayForecast } from '../models/app';
import { utils } from '../utils/index'
import { appStore } from '../store/app';

class AllDayForecastApi {
  async getAllDay() {
    const { cityName, apiKey } = appStore;
    const urlDailyForecast = await
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ cityName }&appid=${ apiKey }&units=metric`);
    const dailyForecast = await urlDailyForecast.json();
    const arr = [];
    dailyForecast.list.forEach(function(item) {
      const elem: AllDayForecast = {
        id: item.weather[0].id,
        dt_txt: item.dt_txt,
        forecastDate: new Date(item.dt * 1000).toLocaleDateString(),
        celsiusTemp: Math.round(item.main.temp),
        fahrenheitTemp: Math.round(item.main.temp * 9/5) + 32,
        humidity: (item.main.humidity) + '%',
        pressureInMmhg: Math.round(item.main.pressure / 1.333),
        weatherDescription: item.weather[0].description,
        weatherIconUrl: utils.getWeatherDescription(item.weather[0].description, '48'),
      };
      arr.push(elem);
    })
    const allDayForecastList = arr.filter(item => item.forecastDate === new Date().toLocaleDateString());
    return allDayForecastList;
  };
};

export const allDayForecastApi = new AllDayForecastApi();