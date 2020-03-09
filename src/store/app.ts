import { observable, action } from 'mobx';
import { Weather} from 'models/app';

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
  @observable urlWeatherIcon: string = undefined;

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
      const urlCurrentWeather = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ this.value }&appid=${ this.apiKey }&units=metric`);
      const currentWeather = await urlCurrentWeather.json();
      const weather: Weather = {
        id: currentWeather.weather[0].id,
        celsiusTemp: Math.round(currentWeather.main.temp),
        fahrenheitTemp: Math.round((currentWeather.main.temp * 9/5) + 32),
        celsiusFeelsLike: Math.round(currentWeather.main.feels_like),
        fahrenheitFeelsLike: Math.round(currentWeather.main.feels_like * 9/5) + 32,
        pressureInMmhg: Math.round(currentWeather.main.pressure / 1.333),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        weatherDescription: currentWeather.weather[0].description,
        windSpeed: parseFloat(currentWeather.wind.speed).toFixed(1),
        windDeg: Math.round(currentWeather.wind.deg),
        sunrise: new Date(currentWeather.sys.sunrise * 1000).toLocaleDateString(),
        sunset: new Date(currentWeather.sys.sunset * 1000).toLocaleDateString(),
        cod: currentWeather.cod,
      };
      const navbar: string[] = [
        currentWeather.name,
        ', ',
        currentWeather.sys.country
      ];
      this.setNavbar(navbar);
      this.setWeather(weather);
      this.setSuccessfulRequest(true);
      this.getWeatherDescription(weather.weatherDescription)
      this.clearValue();
      console.log(weather.weatherDescription)
    } catch (error) {
      this.setNavbar('city not found');
    }
    this.setIsLoding(false);
  };

  @action.bound
  getWeatherDescription(weatherDescription) {
    let urlWeatherIcon = "";
    switch (weatherDescription) {
      case "broken clouds":
        urlWeatherIcon = "https://img.icons8.com/color/96/000000/clouds.png";
        break;
      case "dust":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/dry.png"
        break;
      case "few clouds":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/partly-cloudy-day.png" 
        break;
      case "light rain":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/light-rain.png"
        break;
      case "moderate rain":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/light-rain.png"
        break;
      case "light snow":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/light-snow.png"
        break;
      case "overcast clouds":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/clouds.png"
        break;
      case "proximity shower rain":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/heavy-rain.png"
        break;
        case "light shower snow":
          urlWeatherIcon="https://img.icons8.com/color/96/000000/sleet.png"
        break;
        case "snow":
          urlWeatherIcon="https://img.icons8.com/color/96/000000/snow.png"
        break;
        case "shower snow":
          urlWeatherIcon="https://img.icons8.com/color/96/000000/snow-storm.png"
        break;
      case "scattered clouds":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/clouds.png"
        break;
      case "clear sky":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/summer.png"
        break;
      case "thunderstorm":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/storm.png"
        break;
      case "light intensity drizzle":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/sleet.png"
        break;
      case "fog":
        urlWeatherIcon="https://img.icons8.com/color/96/000000/fog-day.png"
        break;
      default: urlWeatherIcon="https://img.icons8.com/color/96/000000/summer.png";
    }
    this.urlWeatherIcon = urlWeatherIcon 
  }
}

//runtype

export const appStore = new AppStore();
