import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTileComponent } from './dashboard/dashboard-tile/dashboard-tile.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastTileComponent } from './forecast/forecast-tile/forecast-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardTileComponent,
    ForecastComponent,
    ForecastTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
