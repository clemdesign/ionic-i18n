import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'choice',
        loadChildren: () => import('../choice/choice.module').then(m => m.ChoicePageModule)
      },
      {
        path: 'red',
        loadChildren: () => import('../red/red.module').then(m => m.RedPageModule)
      },
      {
        path: 'yellow',
        loadChildren: () => import('../yellow/yellow.module').then(m => m.YellowPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/choice',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/choice',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
