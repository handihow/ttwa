import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdviceStepperComponent } from './advice-stepper/advice-stepper.component';
import { StepOneComponent } from './step-one/step-one.component';


@NgModule({
  declarations: [
    AdviceStepperComponent,
    StepOneComponent
  ],
  imports: [
    CommonModule,
    AdviceRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class AdviceModule { }
