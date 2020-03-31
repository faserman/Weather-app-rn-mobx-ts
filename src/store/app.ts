import { observable, action } from 'mobx';
import { Weather} from 'models/app';
import { locationApi } from '../api/locationApi';
import { weatherApi } from '../api/weatherApi';
import { utils } from '../utils/index';

class AppStore {
  @observable value: string = 'Sibay';
  @observable cityName: string = '';
  @observable isLoding: boolean = false;
  @observable toggleView: boolean = true;
  @observable weather: Weather | undefined;
  @observable celsiusTempMode: boolean = true;
  @observable successfulRequest: boolean = true;
  @observable navbar: string = '';
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";
  @observable urlWeatherIcon: string = '';

  @action
  setValue(value: string) {
    this.value = value;
  }

  @action
  setNavbar(navbar: any) {
    this.navbar = navbar;
  }

  @action
  setWeather(result: Weather) {
    this.weather = result;
  }

  @action
  setIsLoding(mode: boolean) {
    this.isLoding = mode;
  }

  @action.bound
  setCelsiusTempMode() {
    this.celsiusTempMode = !this.celsiusTempMode;
  }

  @action
  setUrlWeatherIcon(weatherDescription: string) {
    const result = utils.getWeatherDescription(weatherDescription);
    this.urlWeatherIcon = result;
  }

  @action
  setSuccessfulRequest(mode: boolean) {
    this.successfulRequest = mode;
  }

  @action
  setToggleView(mode: boolean) {
    this.toggleView  = mode;
  }

  @action
  clearValue() {
    this.value = '';
  }

  @action
  clearData() {
    this.weather = undefined;
    this.navbar = '';
  }

  @action.bound
  async gettingForecast() {
    this.setIsLoding(true);
    this.clearData();
    this.setToggleView(false);
    this.setSuccessfulRequest(false);
    try {
      const weather = await weatherApi.getCurrentForecast();
      const navbar = await locationApi.getLocation();
      this.setNavbar(navbar);
      this.setWeather(weather);
      this.setUrlWeatherIcon(weather.weatherDescription);
      this.setSuccessfulRequest(true);
      this.clearValue();
      console.log(weather.weatherDescription);
    } catch (error) {
      this.setNavbar('city not found');
    }
    this.setIsLoding(false);
  };
}

//runtype

export const appStore = new AppStore();
