export interface Location {
  id: string,
  cityName: string,
  country: string,
}

export interface Weather {
  celsiusTemp: number,
  fahrenheitTemp: number,
  celsiusFeelsLike: number,
  fahrenheitFeelsLike: number,
  pressureInMmhg: number,
  humidity: string,
  date: string,
  time: string,
  weatherDescription: string,
  weatherIconUrl: string,
  windForce: number,
  windDirection: string,
  windVerbalDesignation: string,
  sunrise: string,
  sunset: string,
  cod: string,
}

export interface DailyForecast {
  id: string,
  dt_txt: string,
  forecastDate: any,
  forecastTime: any,
  celsiusTemp: number,
  fahrenheitTemp: number,
  pressureInMmhg: number,
  humidity: string,
  weatherDescription: string,
  weatherIconUrl: string,
}