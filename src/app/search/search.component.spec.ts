import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MockComponent } from 'ng-mocks';
import { HotelResultComponent } from '../hotel-result/hotel-result.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../hotel/hotel.service';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let hotelService: jasmine.SpyObj<HotelService>;

  beforeEach(async(() => {
    hotelService = jasmine.createSpyObj<HotelService>('HotelService', ['search']);

    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        MockComponent(HotelResultComponent)
      ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: HotelService, useValue: hotelService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return result from a country', () => {
    component.inputSearch = 'New York';
    hotelService.search.and.returnValue(of(new Array(5)));

    component.search();
    fixture.detectChanges();
    const results = fixture.debugElement.queryAll(By.css('app-hotel-result'));

    expect(results.length).toBe(5);
  });
});
