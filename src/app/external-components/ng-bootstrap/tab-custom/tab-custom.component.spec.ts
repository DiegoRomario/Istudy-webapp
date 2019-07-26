import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCustomComponent } from './tab-custom.component';

describe('TabCustomComponent', () => {
  let component: TabCustomComponent;
  let fixture: ComponentFixture<TabCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
