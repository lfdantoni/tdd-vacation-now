import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  search(textToSearch: string): Observable<string[]> {
    return of(['hotel1', 'hotel2', 'hotel3']);
  }
}
