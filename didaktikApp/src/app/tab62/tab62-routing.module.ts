import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab62Page } from './tab62.page';

const routes: Routes = [
  {
    path: '',
    component: Tab62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab62PageRoutingModule {}
