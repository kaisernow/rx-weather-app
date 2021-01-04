import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as Countries from './../../store/reducers';
import * as CountriesActions from './../../store/actions';

import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  public currentPageNumber = 1;
  public countries: any[];
  public route$;
  constructor(private store: Store<Countries.CountriesState>, private route: ActivatedRoute, private router : Router) {

   }

  ngOnInit() {
    this.store.dispatch(new CountriesActions.readCountries(this.currentPageNumber));    
    this.store.select<Countries.CountriesState>('countries').subscribe(data => {
      this.countries = data.countries;
      console.log(data)
    });
    this.route$ = this.route.queryParams.pipe(
      filter(params => params.page)
    ).subscribe(query => {
      let { page } = query;
      page = parseInt(page);
      if(isNaN(page)){
        window.location.href = '/?page=1';
      }
      this.currentPageNumber = page <= 0 || isNaN(page)? 1 : page;

      console.log(page);
      this.store.dispatch(new CountriesActions.readCountries(this.currentPageNumber));    
    });   
  }

  ngOnChanges(){

  }
  ngOnDestroy(){
  }

}
