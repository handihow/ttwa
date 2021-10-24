import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'information',
    loadChildren: () =>
      import('./information/information.module').then((m) => m.InformationModule),
  },
  {
    path: 'advice',
    loadChildren: () =>
      import('./advice/advice.module').then((m) => m.AdviceModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'advice',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
