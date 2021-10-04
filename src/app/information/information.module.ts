import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { InformationListComponent } from './information-list/information-list.component';
import { InformationPostComponent } from './information-post/information-post.component';


@NgModule({
  declarations: [
    InformationListComponent,
    InformationPostComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class InformationModule { }
