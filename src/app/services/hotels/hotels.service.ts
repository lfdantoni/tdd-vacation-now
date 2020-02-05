import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  API_URL = 'assets/hotels.json';

  constructor(private httpClient: HttpClient) { }

  search(textToSearch: string): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>(this.API_URL, {params: {q: textToSearch}});
  }
}
