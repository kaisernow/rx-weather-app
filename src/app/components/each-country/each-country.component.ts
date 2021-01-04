import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-country',
  templateUrl: './each-country.component.html',
  styleUrls: ['./each-country.component.scss']
})
export class EachCountryComponent implements OnInit {

  @Input()
  countryName: any;

  countryLink: string;

  constructor() { 
  }

  ngOnInit() {
    this.countryLink = this.countryName;

  }

}
