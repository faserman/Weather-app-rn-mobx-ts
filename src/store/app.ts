import { observable, action } from 'mobx';
import { Result } from 'models/app';

class AppStore {
  @observable value = '';
  @observable cityName = '';
  @observable toggleView = true;
  @observable result: Result[] = [];
  @observable apiKey: string = "546a0e84dacdbf34088457c38f5c4f43";

  @action
  setValue(value: string) {
    this.value = value;
  }

  /*@action
  setToggleView(mode: boolean) {
    this.toggleView = mode;
  }*/

  @action.bound
  async gettingWeather() {
    //this.setToggleView(false);
    const city = this.value;
    const key = this.apiKey;

    try{
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }&units=metric`);
      const data = await api_url.json();
      console.log(data.name);
    } catch (error) {
      console.log(error);
    }
  }

}

export const appStore = new AppStore();
