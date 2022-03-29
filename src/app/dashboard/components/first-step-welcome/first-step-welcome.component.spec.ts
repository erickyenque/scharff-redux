import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepWelcomeComponent } from './first-step-welcome.component';

describe('FirstStepWelcomeComponent', () => {
  let component: FirstStepWelcomeComponent;
  let fixture: ComponentFixture<FirstStepWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStepWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
