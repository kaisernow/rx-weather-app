import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import { Store } from '@ngrx/store';
import * as allReducers from './../../store/reducers';
import * as allActions from './../../store/actions';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  public state;
  public states : any[] = [];
  public route$;
  public done = false;

  constructor(private route: ActivatedRoute, public store: Store<allReducers.CountriesState>) { }

  ngOnInit() {
    this.route$ = this.route.params.subscribe( params =>
      this.state = params['state']
    );
    this.store.dispatch(new allActions.readStates(this.state));
    this.store.select<allReducers.CountriesState>('countries').subscribe(data =>{

      this.states = data.currentState.States || [];
      console.log(data.currentState.States);
    }
    )
    this.done = true;
  }
  ngOnChange(){
    console.log(this.states);
  }
  ngOnDestroy(){
  }

}
