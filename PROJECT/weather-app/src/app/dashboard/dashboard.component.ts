import { Component, OnInit } from '@angular/core';
import { IDashboardTile } from '../models/viewModels/IDashboardTile';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardTileDatas: IDashboardTile[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    console.log('init');
    this.weatherService.getGroupWeatherData()
    .subscribe((response) => (this.dashboardTileDatas = response));
  }
}
