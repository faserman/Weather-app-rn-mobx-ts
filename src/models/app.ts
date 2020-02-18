export interface Result {
  id: string,
  cityName: string,
  country: string,
  temp: number,
  feelsLike: number,
  pressureInMmhg: number,
  date: number,
  time: number,
  weatherDescription: string,
  windSpeed: string,
  windDeg: number,
  sunrise: number,
  sunset: number,
  cod: string,
}

export type ResultDraft = Omit<Result, 'id'>;