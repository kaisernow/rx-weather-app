import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EachCountryComponent } from './components/each-country/each-country.component';
import { EachStateComponent } from './components/each-state/each-state.component';
import { EachWeatherComponent } from './components/each-weather/each-weather.component';
import { CountriesComponent } from './components/countries/countries.component';
import { StatesComponent } from './components/states/states.component';
import { StoreModule } from '@ngrx/store';
import { allReducers } from './store/reducers';

//effects
import { EffectsModule } from '@ngrx/effects';
import * as AllEffects from './store/effects'

//services
import { CountriesService }from './services/countries.service';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotfoundComponent,
    EachCountryComponent,
    EachStateComponent,
    EachWeatherComponent,
    CountriesComponent,
    StatesComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(allReducers),
    EffectsModule.forRoot([AllEffects.CountriesEffect, AllEffects.WeatherEffect])
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
