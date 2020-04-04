import { observable, action } from 'mobx';
import { Weather } from 'models/app';
import { locationApi } from '../api/locationApi';
import { weatherApi } from '../api/weatherApi';
import { allDayForecastApi } from '../api/AllDayForecastApi';

class AppStore {
  @observable value: string = 'Ufa';
  @observable cityName: string = '';
  @observable isLoding: boolean = false;
  @observable toggleView: boolean = true;
  @observable weather: Weather | undefined;
  @observable allDayForecast: any | undefined;
  @observable celsiusTempMode: boolean = true;
  @observable successfulRequest: boolean = true;
  @observable navbar: string = '';
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";

  @action
  setValue(value: string) {
    this.value = value;
  }

  @action
  setCityName() {
    this.cityName = this.value.trim();
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
  setAllDayForecast(result: any) {
    this.allDayForecast = result;
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
    this.cityName = '';
  }

  @action
  clearData() {
    this.weather = undefined;
    this.navbar = '';
  }

  @action.bound
  async gettingForecast() {
    this.setCityName();
    this.setIsLoding(true);
    this.clearData();
    this.setToggleView(false);
    this.setSuccessfulRequest(false);
    try {
      const weather = await weatherApi.getCurrentForecast();
      this.setWeather(weather);
      const navbar = await locationApi.getLocation();
      this.setNavbar(navbar);
      const allDayForecast = await allDayForecastApi.getAllDay();
      this.setAllDayForecast(allDayForecast);
      this.setSuccessfulRequest(true);
      this.clearValue();
      console.log(allDayForecast);
      console.log(weather.date)
      console.log(weather.weatherDescription);
    } catch (error) {
      this.setNavbar('city not found');
      console.log(error);
    }
    this.setIsLoding(false);
  };
}

//runtype

export const appStore = new AppStore();
