import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStepWelcomeComponent } from './third-step-welcome.component';

describe('ThirdStepWelcomeComponent', () => {
  let component: ThirdStepWelcomeComponent;
  let fixture: ComponentFixture<ThirdStepWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdStepWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdStepWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
