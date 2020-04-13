import { DailyForecast } from '../models/app';
import { utils } from '../utils/index';
import { uniqueId } from 'lodash';

class DailyForecastApi {
  async getAllDay(cityName: string, apiKey: string) {
    const urlDailyForecast = await
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ cityName }&appid=${ apiKey }&units=metric`);
    const dailyForecastJson = await urlDailyForecast.json();
    const sizeIcon = "48";
    const dailyForecastList: DailyForecast[] = [];
    dailyForecastJson.list.forEach(item => {
      const elem: DailyForecast = {
        id: uniqueId(),
        dt_txt: item.dt_txt,
        forecastDate: new Date(item.dt * 1000).toLocaleDateString(),
        forecastTime: new Date(item.dt * 1000).toLocaleTimeString(),
        celsiusTemp: Math.round(item.main.temp),
        fahrenheitTemp: Math.round(item.main.temp * 9/5) + 32,
        humidity: (item.main.humidity) + '%',
        pressureInMmhg: Math.round(item.main.pressure / 1.333),
        weatherDescription: item.weather[0].description,
        weatherIconUrl: utils.setWeatherIcon(item.weather[0].description, sizeIcon),
      };
      dailyForecastList.push(elem);
    })
    return dailyForecastList;
  };
};

export const dailyForecastApi = new DailyForecastApi();