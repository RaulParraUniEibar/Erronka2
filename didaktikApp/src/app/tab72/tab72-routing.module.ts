import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab72Page } from './tab72.page';

const routes: Routes = [
  {
    path: '',
    component: Tab72Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab72PageRoutingModule {}
