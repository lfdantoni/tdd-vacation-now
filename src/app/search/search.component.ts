import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel/hotel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch: string;
  results$: Observable<any[]>;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
  }

  search() {
    this.results$ = this.hotelService.search(this.inputSearch);
  }

}
