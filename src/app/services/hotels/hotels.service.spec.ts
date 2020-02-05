import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpParams } from '@angular/common/http';

describe('HotelsService', () => {
  let httpMock: HttpTestingController;
  let service: HotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get<HotelsService>(HotelsService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search hotels to a city', () => {
    const response = [ {name: 'hotel' }, {name: 'hotel 56' } ];
    const dummyParams = new HttpParams().set('q', 'New York');

    service.search('New York').subscribe(hotels => {
      expect(hotels.length).toBe(2);
      expect(hotels).toEqual(response);
    });

    const req = httpMock.expectOne(`${service.API_URL}?${dummyParams.toString()}`);
    expect(req.request.method).toBe('GET');
    expect(req.request.params).toEqual(dummyParams);
    req.flush(response);
  });
});
