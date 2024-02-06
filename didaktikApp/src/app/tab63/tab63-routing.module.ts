import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab63Page } from './tab63.page';

const routes: Routes = [
  {
    path: '',
    component: Tab63Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab63PageRoutingModule {}
