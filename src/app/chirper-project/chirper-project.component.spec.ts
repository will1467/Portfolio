import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirperProjectComponent } from './chirper-project.component';

describe('ChirperProjectComponent', () => {
  let component: ChirperProjectComponent;
  let fixture: ComponentFixture<ChirperProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirperProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirperProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
