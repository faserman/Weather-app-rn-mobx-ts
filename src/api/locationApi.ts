import { Location } from '../models/app';
import { appStore } from '../store/app';

class LocationApi {
  async getLocation() {
    const { cityName, apiKey } = appStore;
    const urlCurrentWeather = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ apiKey }&units=metric`);
    const currentWeather = await urlCurrentWeather.json();
    const location: Location = {
      id: currentWeather.weather[0].id,
      cityName: currentWeather.name,
      country: currentWeather.sys.country,
    };
    const navbar: string[] = [
      location.cityName,
      ', ',
      location.country,
    ];
  return navbar;
  };
};

export const locationApi = new LocationApi();