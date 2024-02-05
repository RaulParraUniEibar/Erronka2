import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab61Page } from './tab61.page';

const routes: Routes = [
  {
    path: '',
    component: Tab61Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab61PageRoutingModule {}
