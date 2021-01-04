import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, switchMap, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface CountriesData {
  Countries: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(pageNumber: number=1): Observable<any[]>{
    return this.http.get<CountriesData>("/assets/data/db.json").pipe(switchMap((data) => {
      // pageNumber = pageNumber <= 0 || typeof pageNumber !== "number" ? 1 : pageNumber; 
      let reqCountries: any[], total = pageNumber * 40, lowerLimit = total - 40 < 1? 1: total - 40;
      reqCountries = data.Countries.slice(total - 40, total);
      return of(reqCountries);
    })
    )
  }

  getStates(country: string){
    return this.http.get<CountriesData>("/assets/data/db.json").pipe(
      switchMap((data) => {
      console.log(data);

        let reqStates = data.Countries.filter(data => data.CountryName === country)
        return reqStates;
      })
    )
  }
}
