import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  inputSearch: string;
  hotels: string[];

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.hotels = ["hotel1", "hotel2", "hotel3"];
  }
}
