import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { StatesComponent } from './components/states/states.component';
import { EachWeatherComponent } from './components/each-weather/each-weather.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },{
    path: ':state',
    component: StatesComponent
  },{
    path: ':state/weather',
    component: EachWeatherComponent
  },{
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
