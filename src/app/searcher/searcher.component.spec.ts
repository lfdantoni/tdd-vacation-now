import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherComponent } from './searcher.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HotelsService } from '../services/hotels/hotels.service';
import { of } from 'rxjs';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;
  let hotelServiceMock: jasmine.SpyObj<HotelsService>;

  beforeEach(async(() => {
    hotelServiceMock = jasmine.createSpyObj<HotelsService>('HotelsService', ['search']);

    TestBed.configureTestingModule({
      declarations: [ SearcherComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: HotelsService, useValue: hotelServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search input', () => {
    const input = fixture.debugElement.query(By.css('input[name=search]'));

    expect(input.nativeElement).toBeDefined();
  });

  it('should have a search button', () => {
    const button = fixture.debugElement.query(By.css('button.search-button'));

    expect(button.nativeElement).toBeDefined();
    expect(button.nativeElement.innerText).toBe('Search Vacation');
  });

  it('should show results after searching successfully', () => {
    // INIT
    component.inputSearch = 'New York';
    const button = fixture.debugElement.query(By.css('button.search-button'));
    spyOn(component, 'onSearch').and.callThrough();
    hotelServiceMock.search.and.returnValue(of(['hotel4', 'hotel5', 'hotel6']));

    // ACT
    button.nativeElement.click();
    fixture.detectChanges();
    const results = fixture.debugElement.queryAll(By.css('.hotel-result'));

    // ASSERTS
    expect(results.length).toBe(3);
    expect(component.onSearch).toHaveBeenCalled();
    expect(hotelServiceMock.search).toHaveBeenCalledWith(component.inputSearch);
  });
});
