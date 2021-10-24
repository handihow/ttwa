import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceStepperComponent } from './advice-stepper/advice-stepper.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdviceStepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
