import * as weatherActions from './../actions';

export interface WeatherState{
    location : any;
    current: any;
    forecast: any;
}
export const initialState: WeatherState = {
    location : {},
    current : {},
    forecast: {}
}

export function weatherReducer(state: WeatherState = initialState, action){
    switch(action.type){
        case weatherActions.GET_WEATHER: {
           return {
               ...state,
               location: action.payload.location,
               current: action.payload.current,
               forecast: action.payload.forecast
           }
        }
        default: {
            return state
        }
    }
}