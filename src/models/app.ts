export interface CurrentWeather {
  id: string,
  temp: number,
  feelsLike: number,
  pressureInMmhg: number,
  date: string,
  time: string,
  weatherDescription: string,
  windSpeed: string,
  windDeg: number,
  sunrise: string,
  sunset: string,
  cod: string,
}

export interface DailyForecast {
  tempMorn: number,
  tempDay: number,
  tempEve: number,
  tempNight: number,
}