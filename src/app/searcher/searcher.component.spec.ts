import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherComponent } from './searcher.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherComponent ],
      imports: [
        FormsModule
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
    component.inputSearch = 'New York';
    const button = fixture.debugElement.query(By.css('button.search-button'));
    spyOn(component, 'onSearch').and.callThrough();

    button.nativeElement.click();
    fixture.detectChanges();
    const results = fixture.debugElement.queryAll(By.css('.hotel-result'));
    
    expect(results.length).toBe(component.hotels.length);
    expect(component.onSearch).toHaveBeenCalled();
  });
});
