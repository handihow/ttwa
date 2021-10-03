import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationListComponent } from './information-list/information-list.component';
import { InformationPostComponent } from './information-post/information-post.component';

const routes: Routes = [
  {
    path: ':id',
    component: InformationPostComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: InformationListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
