import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCycleComponent } from './configuration-cycle.component';

describe('ConfigurationCycleComponent', () => {
  let component: ConfigurationCycleComponent;
  let fixture: ComponentFixture<ConfigurationCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
