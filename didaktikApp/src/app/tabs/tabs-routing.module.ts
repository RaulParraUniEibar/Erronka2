import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'tab6',
        loadChildren: () => import('../tab6/tab6.module').then(m => m.Tab6PageModule)
      },
      {
        path: 'tab7',
        loadChildren: () => import('../tab7/tab7.module').then(m => m.Tab7PageModule)
      },
      {
        path: 'tab42',
        loadChildren: () => import('../tab42/tab42.module').then(m => m.Tab42PageModule)
      },
      {
        path: 'tab43',
        loadChildren: () => import('../tab43/tab43.module').then(m => m.Tab43PageModule)
      },
      {
        path: 'tab44',
        loadChildren: () => import('../tab44/tab44.module').then(m => m.Tab44PageModule)
      },
      {
        path: 'tab45',
        loadChildren: () => import('../tab45/tab45.module').then(m => m.Tab45PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
