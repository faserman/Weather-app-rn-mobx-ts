import { observable, action } from 'mobx';
import { CurrentWeather, DailyForecast } from 'models/app';

class AppStore {
  @observable value: string = 'Sibay';
  @observable cityName: string = '';
  @observable isLoding: boolean = false;
  @observable toggleView: boolean = true;
  @observable currentWeather: CurrentWeather | undefined;
  @observable dailyForecast: DailyForecast | undefined;
  @observable navbar: string = '';
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";

  @action
  setValue(value: string) {
    this.value = value;
  }

  @action
  setNavbar(navbar: any) {
    this.navbar = navbar;
  }

  @action
  setCurrentWeather(weather: CurrentWeather) {
    this.currentWeather = weather;
  }

  @action
  setDailyForecast(weather: DailyForecast) {
    this.dailyForecast = weather;
  }

  @action
  setIsLoding(mode: boolean) {
    this.isLoding = mode;
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
    this.currentWeather = undefined;
    this.dailyForecast = undefined;
    this.navbar = '';
  }

  @action.bound
  async gettingWeather() {
    try {
      this.clearData();
      this.setToggleView(false);
      this.gettingCurrentWeather()
      this.gettingDailyForecast()
      this.clearValue();
    } catch (error) {
      this.setNavbar('city not found');
      console.log(this.navbar);
      console.log(error.name);
      console.log(error.message);
    }
  }

  @action.bound
  async gettingCurrentWeather() {
    this.setIsLoding(true);
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ this.value }&appid=${ this.apiKey }&units=metric`);
    const data = await api_url.json();
    const weather: CurrentWeather = {
      id: data.weather[0].id,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      pressureInMmhg: Math.round(data.main.pressure / 1.333),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      weatherDescription: data.weather[0].description,
      windSpeed: parseFloat(data.wind.speed).toFixed(1),
      windDeg: Math.round(data.wind.deg),
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleDateString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleDateString(),
      cod: data.cod
    };
    const navbar: string[] = [
      data.name,
      ', ',
      data.sys.country
    ];
    this.setNavbar(navbar);
    this.setCurrentWeather(weather);
    console.log(data.main.temp);
    console.log(weather.temp);
    console.log(this.currentWeather.temp)
    this.setIsLoding(false);
  }

  @action.bound
  async gettingDailyForecast() {
    try {
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${ this.value }&cnt=${1}&appid=${ this.apiKey }&units=metric`);
      const data = await api_url.json();
      const weather: DailyForecast = {
        tempMorn: Math.round(data.list[0].temp.morn),
        tempDay: Math.round(data.list[0].temp.day),
        tempEve: Math.round(data.list[0].temp.eve),
        tempNight: Math.round(data.list[0].temp.night),
      }
      this.setDailyForecast(weather);
      console.log('====================================================')
      console.log(data)
    } catch (error) {
      console.log(error);
      console.log(error.name);
      console.log(error.message);
    }
  }
}

//runtype

export const appStore = new AppStore();
