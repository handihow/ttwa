import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    ImageComponent,
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ImageComponent
  ],
  entryComponents: [
    ImageDialogComponent
  ]
})
export class SharedModule { }
