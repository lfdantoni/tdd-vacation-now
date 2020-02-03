import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  search(textToSearch: string): Observable<any[]> {
    return of(new Array(5));
  }
}
