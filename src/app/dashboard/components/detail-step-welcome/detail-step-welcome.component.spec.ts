import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStepWelcomeComponent } from './detail-step-welcome.component';

describe('DetailStepWelcomeComponent', () => {
  let component: DetailStepWelcomeComponent;
  let fixture: ComponentFixture<DetailStepWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStepWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStepWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
