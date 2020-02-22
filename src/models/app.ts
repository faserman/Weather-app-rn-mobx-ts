export interface Weather {
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

export type WeatherDraft = Omit<Weather, 'id'>;