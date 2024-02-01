import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab45Page } from './tab45.page';

const routes: Routes = [
  {
    path: '',
    component: Tab45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab45PageRoutingModule {}
