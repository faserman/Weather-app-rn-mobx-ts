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
  date: string,
  time: string,
  weatherDescription: string,
  windSpeed: string,
  windDeg: number,
  sunrise: string,
  sunset: string,
  cod: string,
}

export interface AllDayForecast {
  id: number,
  dt_txt: string,
  forecastDate: any,
  celsiusTemp: number,
  fahrenheitTemp: number,
  pressureInMmhg: number,
  humidity: string,
  weatherDescription: string,
}