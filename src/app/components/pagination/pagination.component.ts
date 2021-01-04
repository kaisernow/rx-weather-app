import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  total: number;

  @Input()
  currentPage: number;

  public numberOfPages: any[] = [];

  constructor() { }

  ngOnInit() {
   for (let i = 1; i < Math.floor(this.total / 30); i++){
     this.numberOfPages.push(i);
   }
  }
  goToPage(page){
    window.location.href = '/?page='+page;
  }

}
