import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { WeatherRoutingModule } from './weather-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule
  ],
  declarations: [
    WeatherComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }