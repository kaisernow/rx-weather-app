import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(state: string){
    console.log("got here");
    return this.http.get(`https://api.apixu.com/v1/forecast.json?days=2&key=ba8466f4113f447c823161315190904&q=${state}`);
  }
}
