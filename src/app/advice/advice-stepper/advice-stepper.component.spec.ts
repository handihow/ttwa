import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceStepperComponent } from './advice-stepper.component';

describe('AdviceStepperComponent', () => {
  let component: AdviceStepperComponent;
  let fixture: ComponentFixture<AdviceStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
