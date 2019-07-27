import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleConfigurationComponent } from './cycle-configuration.component';

describe('CycleConfigurationComponent', () => {
  let component: CycleConfigurationComponent;
  let fixture: ComponentFixture<CycleConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
