import { observable, action } from 'mobx';
import { Weather } from 'models/app';

class AppStore {
  @observable value: string = 'Sibay';
  @observable cityName: string = '';
  @observable isLoding: boolean = false;
  @observable toggleView: boolean = true;
  @observable weather: Weather | undefined;
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
  setWeather(weather: Weather) {
    this.weather = weather;
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
    this.weather = undefined;
    this.navbar = '';
  }

  @action.bound
  async gettingWeather() {
    this.clearData();
    this.setToggleView(false);
    this.setIsLoding(true);
    const city = this.value;
    const key = this.apiKey;

    try {
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }&units=metric`);
      const data = await api_url.json();
      this.setNavbar(data.name);
      /*const weather: Weather = {
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
      this.setWeather(weather);
      this.clearValue();
      console.log(this.navbar);
      console.log(weather.temp);
      console.log('===================================================');
      console.log(weather.cod);
      console.log(this.weather.cod);*/
    } catch (error) {
      this.setNavbar('city not found');
      console.log(this.navbar);
      console.log(error.name);
      console.log(error.massage);
    }
    this.setIsLoding(false);
  }
}

//runtype

export const appStore = new AppStore();
