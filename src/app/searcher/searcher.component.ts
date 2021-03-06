import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels/hotels.service';
import { Observable } from 'rxjs';
import { HotelModel } from '../models/hotel';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  inputSearch: string;
  hotels$: Observable<HotelModel[]>;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
  }

  onSearch() {
    this.hotels$ = this.hotelsService.search(this.inputSearch);
  }
}
