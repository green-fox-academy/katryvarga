import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { IDashboardTile } from './models/viewModels/IDashboardTile';
import {
  IWeatherApiData,
  IWeatherApiGroupData,
} from './models/models/IWeatherApi';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cityIds = ['5809844', '4164138', '3128760'];

  constructor(private httpClient: HttpClient) {}

  getGroupWeatherData(): Observable<IDashboardTile[]> {
    return this.httpClient
      .get<IWeatherApiGroupData>(
        `${environment.baseUrl}/data/2.5/group?id=${this.cityIds.join(
          ','
        )}&appid=${environment.apiKey}&units=metric`
      )
      .pipe(
        tap((x) => console.log(x)),
        map((groupData) =>
          groupData.list.map<IDashboardTile>((weatherApiData) => {
            return {
              id: weatherApiData.id,
              cityName: weatherApiData.name,
              country: weatherApiData.sys.country,
              temp: weatherApiData.main.temp,
              iconUrl: `http://openweathermap.org/img/wn/${weatherApiData.weather[0].icon}@2x.png`,
            };
          })
        ),
        catchError((err) => of([]))
      );
  }

  getWeatherData(cityName: string): Observable<IDashboardTile> {
    return this.httpClient
      .get<IWeatherApiData>(
        `${environment.baseUrl}/data/2.5/weather?q=${cityName}&appid=${environment.apiKey}&units=metric`
      )
      .pipe(
        map((weatherApiData) => {
          return {
            id: weatherApiData.id,
            cityName: weatherApiData.name,
            country: weatherApiData.sys.country,
            temp: weatherApiData.main.temp,
            iconUrl: `http://openweathermap.org/img/wn/${weatherApiData.weather[0].icon}@2x.png`,
          };
        })
      );
  }
}
