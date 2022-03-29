import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepWelcomeComponent } from './second-step-welcome.component';

describe('SecondStepWelcomeComponent', () => {
  let component: SecondStepWelcomeComponent;
  let fixture: ComponentFixture<SecondStepWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStepWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStepWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
