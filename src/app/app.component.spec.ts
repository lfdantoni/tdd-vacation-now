import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { SearcherComponent } from './searcher/searcher.component';
import {MockComponent} from 'ng-mocks'

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(SearcherComponent)
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a title', () => {
    component.title = 'Test Title';
    const h1 = fixture.debugElement.query(By.css('h1'));

    fixture.detectChanges();

    expect(h1.nativeElement.innerText).toBe('Test Title');
  });

  fit('should have a searcher', () => {
    const searcher = fixture.debugElement.query(By.css('app-searcher'));

    expect(searcher.nativeElement).toBeDefined();
  })
});
