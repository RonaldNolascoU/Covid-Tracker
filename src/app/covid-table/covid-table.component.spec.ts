import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTableComponent } from './covid-table.component';

describe('CovidTableComponent', () => {
  let component: CovidTableComponent;
  let fixture: ComponentFixture<CovidTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
