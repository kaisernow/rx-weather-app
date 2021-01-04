import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-state',
  templateUrl: './each-state.component.html',
  styleUrls: ['./each-state.component.scss']
})
export class EachStateComponent implements OnInit {
  @Input() 
  stateName;

  constructor() { }

  ngOnInit() {
  }

}
