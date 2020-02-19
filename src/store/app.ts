import { observable, action } from 'mobx';
import { Result } from 'models/app';

class AppStore {
  @observable value: string = 'Sibay';
  @observable cityName: string = '';
  @observable toggleView: boolean = false;
  @observable result: Result | undefined;
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";

  @action
  setValue(value: string) {
    this.value = value;
  }

  @action
  setResult(result: Result) {
    this.result = result
  }

  @action
  setToggleView(mode: boolean) {
    this.toggleView = mode;
  }

  @action.bound
  async gettingWeather() {
    this.setToggleView(true);
    const city = this.value;
    const key = this.apiKey;

    try{
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }&units=metric`);
      const data = await api_url.json();
      const result: Result = {
        id: data.weather[0].id,
        cityName: data.name,
        country: data.sys.country,
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
      this.setResult(result);
      console.log(result.temp);
      console.log('===================================================');
      console.log(this.result.temp);
    } catch (error) {
      console.log(error);
    }
  }
}

//runtype

export const appStore = new AppStore();
