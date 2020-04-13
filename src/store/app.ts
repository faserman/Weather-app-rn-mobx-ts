import { observable, action } from 'mobx';
import { Weather } from 'models/app';
import { DailyForecast } from 'models/app';
import { locationApi } from '../api/locationApi';
import { weatherApi } from '../api/weatherApi';
import { dailyForecastApi } from '../api/dailyForecastApi';

class AppStore {
  @observable value: string = 'Ufa';
  @observable cityName: string = '';
  @observable isLoding: boolean = false;
  @observable toggleView: boolean = true;
  @observable weather: Weather | undefined;
  @observable dailyForecast: DailyForecast[] = [];
  @observable celsiusTempMode: boolean = true;
  @observable successfulRequest: boolean = true;
  @observable navbar: string | string[];
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";
  @observable weatherDescriptionImage: string = '';

  @action
  setValue(value: string) {
    this.value = value;
  }

  @action
  setCityName() {
    this.cityName = this.value.trim();
  }

  @action
  setNavbar(navbar: string | string[]) {
    if (typeof navbar === "string") {
      this.navbar = navbar;
    }
    this.navbar = navbar;
  }

  @action
  setWeatherDescriptionImage(string: string) {
    this.weatherDescriptionImage = ',' + string;
  }

  @action
  setWeather(result: Weather) {
    this.weather = result;
  }

  @action
  setDailyForecast(result: DailyForecast[]) {
    this.dailyForecast = result;
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
    this.navbar = '';
    this.weather = undefined;
    this.dailyForecast = undefined;
  }

  @action.bound
  async gettingForecast() {
    this.setCityName();
    this.setIsLoding(true);
    this.clearData();
    this.setToggleView(false);
    this.setSuccessfulRequest(false);
    try {
      const navbar = await locationApi.getLocation(this.cityName, this.apiKey);
      this.setNavbar(navbar);
      const weather = await weatherApi.getCurrentForecast(this.cityName, this.apiKey);
      this.setWeather(weather);
      const dailyForecast = await dailyForecastApi.getAllDay(this.cityName, this.apiKey);
      this.setWeatherDescriptionImage(this.weather.weatherDescription)
      this.setDailyForecast(dailyForecast);
      this.setSuccessfulRequest(true);
      this.clearValue();
    } catch (error) {
      this.setNavbar('CITY NOT FOUND');
      console.log(this.navbar);
      console.log(error);
    }
    this.setIsLoding(false);
  };
}

//runtype

export const appStore = new AppStore();
