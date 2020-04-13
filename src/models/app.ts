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
  dateTime: string,
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
  forecastDate: string,
  forecastTime: string,
  celsiusTemp: number,
  fahrenheitTemp: number,
  pressureInMmhg: number,
  humidity: string,
  weatherDescription: string,
  weatherIconUrl: string,
}