import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDashboardTile } from '../models/viewModels/IDashboardTile';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardTileDatas: IDashboardTile[];
  oneCityTileData: IDashboardTile;

  cityName = new FormControl('');

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getGroupWeatherData()
      .subscribe((response) => (this.dashboardTileDatas = response));
  }

  searchCity(): void {
    this.weatherService
      .getWeatherData(this.cityName.value)
      .subscribe((response) => {
        this.oneCityTileData = response;
        this.dashboardTileDatas.push(response);
      });
  }
}
