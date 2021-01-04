import { Action } from '@ngrx/store';

export const READ_WEATHER = "READ WEATHER";
export class readWeather implements Action{
    readonly type = READ_WEATHER;
    constructor(public payload: any){}
}

export const GET_WEATHER = "GET WEATHER";
export class getWeather implements Action{
    readonly type = GET_WEATHER;
    constructor(public payload: any){}
}

export const READ_WEATHER_FAILED = "READ_WEATHER_FAILED";
export class readWeatherFailed implements Action{
    readonly type=READ_WEATHER_FAILED;
    constructor(public payload: any){}
}

export type wTypes = readWeather | getWeather | readWeatherFailed;