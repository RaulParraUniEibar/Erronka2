import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab71Page } from './tab71.page';

const routes: Routes = [
  {
    path: '',
    component: Tab71Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab71PageRoutingModule {}
