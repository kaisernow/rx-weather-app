import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachWeatherComponent } from './each-weather.component';

describe('EachWeatherComponent', () => {
  let component: EachWeatherComponent;
  let fixture: ComponentFixture<EachWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
