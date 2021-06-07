import { Component, Input, OnInit } from '@angular/core';
import { IDashboardTile } from 'src/app/models/viewModels/IDashboardTile';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
})
export class DashboardTileComponent implements OnInit {
  @Input()
  tileData: IDashboardTile;

  constructor() {}

  ngOnInit(): void {}
}
