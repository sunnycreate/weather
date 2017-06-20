import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';
const weatherRoutes: Routes = [
  {
    path: 'center',
    component: WeatherComponent
    // children: [{
    //   path: 'hero/:id',
    //   component: HeroDetailComponent
    // }]
  }
  //{ path: 'hero/:id', component: HeroDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(weatherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WeatherRoutingModule { }