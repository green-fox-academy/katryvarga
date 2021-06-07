export interface IWeatherApiGroupData {
  list: IWeatherApiData[];
}

export interface IWeatherApiData {
  id: number;
  name: string;
  main: IMain;
  sys: ISystem;
  weather: IWeather[];
}

export interface IMain {
  temp: number;
}

export interface ISystem {
  country: string;
}

export interface IWeather {
  icon: string;
}
