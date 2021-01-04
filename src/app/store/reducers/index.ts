import * as countries from './countries.reducer';
import * as weather from './weather.reducer';

export *  from './countries.reducer';
export * from './weather.reducer';


import { ActionReducerMap } from '@ngrx/store';

export const allReducers: ActionReducerMap<any> = {
    countries: countries.cReducer,
    weather: weather.weatherReducer
}

