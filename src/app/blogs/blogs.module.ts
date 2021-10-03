import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class BlogsModule { }
