import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab51Page } from './tab51.page';

const routes: Routes = [
  {
    path: '',
    component: Tab51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab51PageRoutingModule {}
