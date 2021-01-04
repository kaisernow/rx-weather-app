import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as RWeather from './../../store/reducers';
import * as AWeather from './../../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-weather',
  templateUrl: './each-weather.component.html',
  styleUrls: ['./each-weather.component.scss']
})
export class EachWeatherComponent implements OnInit {
  public location;
  public weatherData;
  constructor(private store: Store<RWeather.WeatherState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.location = params['state']);
    this.store.dispatch(new AWeather.readWeather(this.location));

    this.store.select<RWeather.WeatherState>('weather').subscribe(data => {
      this.weatherData = data;
      console.log(data);
    });
  }

}
