import * as CountriesActions from './../actions';

export interface currentState{
    States: any[];
    countryName: string;
}

export interface CountriesState{
    countries: any[];
    currentState: any;
} 

const initialState: CountriesState = {
    countries: [],
    currentState: []
}

export function cReducer (state: CountriesState = initialState, action: CountriesActions.cActions): CountriesState{
    switch(action.type){
        case CountriesActions.GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            }
        }
        case CountriesActions.GET_STATES:{
            return {
                ...state,
                currentState: action.payload
            }
        }
    }
    return state;
}