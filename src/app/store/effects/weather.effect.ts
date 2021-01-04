import { Injectable } from "@angular/core";

import { WeatherService } from './../../services/weather.service';

import { switchMap, map, catchError } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as AWeather from './../actions';
import { weatherReducer } from '../reducers';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffect {
    constructor(private actions$: Actions, private weatherService: WeatherService){}
    @Effect()
        readWeather$ = this.actions$.pipe(
            ofType(AWeather.READ_WEATHER),
            switchMap((action : AWeather.readWeather) => {
                console.log("effects: got here");
                return this.weatherService.getWeather(action.payload)
                .pipe(
                    map(data => new AWeather.getWeather(data)),
                    catchError(error => of(new AWeather.readWeatherFailed(error)))
                )
            })
        );
}