import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab52Page } from './tab52.page';

const routes: Routes = [
  {
    path: '',
    component: Tab52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab52PageRoutingModule {}
