import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconIndicatorsProjectComponent } from './econ-indicators-project.component';

describe('EconIndicatorsProjectComponent', () => {
  let component: EconIndicatorsProjectComponent;
  let fixture: ComponentFixture<EconIndicatorsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconIndicatorsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconIndicatorsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
