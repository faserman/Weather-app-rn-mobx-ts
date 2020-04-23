import { observable, action } from 'mobx';
import { Weather } from 'models/app';
import { DailyForecast } from 'models/app';
import { locationApi } from '../api/locationApi';
import { weatherApi } from '../api/weatherApi';
import { backgroundImgApi } from '../api/backgroundImgApi';
import { dailyForecastApi } from '../api/dailyForecastApi';

class AppStore {
  @observable value: string = '';
  @observable cityName: string = '';
  @observable isLoading: boolean = false;
  @observable weather: Weather | undefined;
  @observable dailyForecast: DailyForecast[] = [];
  @observable celsiusTempMode: boolean = true;
  @observable successfulRequest: boolean = false;
  @observable result: string | string[];
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";
  @observable randomBackgroundImage: string = 'https://source.unsplash.com/720x1560/?city';
  @observable backgroundImg: string = '';

  @action
  setValue(value: string) {
    this.value = value;
  }

  @action
  setCityName() {
    this.cityName = this.value.trim();
  }

  @action
  setResult(result: string | string[]) {
    if (typeof result === "string") {
      this.result = result;
    }
    this.result = result;
  }

  @action
  setWeather(result: Weather) {
    this.weather = result;
  }

  @action
  setBackgroundImg(backgroundImg: string) {
    this.backgroundImg = backgroundImg;
  }

  @action
  setDailyForecast(result: DailyForecast[]) {
    this.dailyForecast = result;
  }

  @action
  setIsLoading(mode: boolean) {
    this.isLoading = mode;
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
  clearValue() {
    this.value = '';
    this.cityName = '';
  }

  @action
  clearData() {
    this.result = '';
    this.weather = undefined;
    this.dailyForecast = undefined;
  }

  @action.bound
  async gettingForecast() {
    this.clearData();
    this.setCityName();
    this.setIsLoading(true);
    this.setSuccessfulRequest(false);
    try {
      const result = await locationApi.getLocation(this.cityName, this.apiKey);
      this.setResult(result);
      const weather = await weatherApi.getCurrentForecast(this.cityName, this.apiKey);
      this.setWeather(weather);
      const backgroundImg = backgroundImgApi.getBackgroundImage(this.weather.weatherDescription);
      this.setBackgroundImg(backgroundImg);
      const dailyForecast = await dailyForecastApi.getAllDay(this.cityName, this.apiKey);
      this.setDailyForecast(dailyForecast);
      this.setSuccessfulRequest(true);
      this.clearValue();
    } catch (error) {
      this.setResult('CITY NOT FOUND');
      console.log(this.result);
      console.log(error);
    }
    this.setIsLoading(false);
  };
}

//runtype

export const appStore = new AppStore();
