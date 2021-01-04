import { Action } from '@ngrx/store';

export const READ_COUNTRIES = "READCOUNTRIES";
export const READ_STATES = "READSTATES";
export const GET_COUNTRIES = "GET COUNTRIES [COUNTRIES]";
export const GET_COUNTRIES_FAILED = "GET COUNTRIES failed [COUNTRIES]";
export const GET_STATES = "GET STATES [COUNTRIES]";
export const GET_STATES_FAILED = "GET STATES FAILED [COUNTRIES]";

export class getCountries implements Action{
    readonly type = GET_COUNTRIES;
    constructor(public payload: any){}
}

export class getCountriesFailed implements Action{
    readonly type = GET_COUNTRIES_FAILED;
    constructor(public payload: any){}
}

export class getStates implements Action{
    readonly type = GET_STATES;
    constructor(public payload: any){}
}

export class getStatesFailed implements Action{
    readonly type = GET_STATES_FAILED;
    constructor(public payload: any){}
}

export class readCountries implements Action {
    readonly type = READ_COUNTRIES
    constructor(public payload: number){}
}

export class readStates implements Action {
    readonly type = READ_STATES
    constructor(public payload: any){}
}

export type cActions = getCountries | getStates | readCountries | readStates | getCountriesFailed | getStatesFailed;