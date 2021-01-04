import { Injectable } from '@angular/core';

import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects' 
import * as CountriesActions from './../actions';
import { of } from 'rxjs';

import * as AllServices from './../../services';
import { CountriesData } from './../../services';

@Injectable()
export class CountriesEffect {
    constructor(private actions$: Actions, private countriesService: AllServices.CountriesService){}

    //by default @Effect dispatches any action returned from the code end
    @Effect()
    readCountries$ = this.actions$.pipe(
        ofType(CountriesActions.READ_COUNTRIES),
        switchMap((action : CountriesActions.readCountries) => {
            console.log("got here for the effect");
            return this.countriesService.getCountries(action.payload)
            .pipe(
                map(data => new CountriesActions.getCountries(data)),
                catchError(error => of(new CountriesActions.getCountriesFailed(error)))
            );              
        })
    );

    @Effect()
    readStates = this.actions$.pipe(
        ofType(CountriesActions.READ_STATES),
        switchMap((action: CountriesActions.readStates) => {
            return this.countriesService.getStates(action.payload)
            .pipe(
                map(data => new CountriesActions.getStates(data)),
                catchError(error => of(new CountriesActions.getStatesFailed(error)))
            )
        })
    )



}