export interface Result {
  id: string,
  cityName: string,
  country: string,
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

export type ResultDraft = Omit<Result, 'id'>;