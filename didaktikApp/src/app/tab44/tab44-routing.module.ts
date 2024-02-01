import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab44Page } from './tab44.page';

const routes: Routes = [
  {
    path: '',
    component: Tab44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab44PageRoutingModule {}
