import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YellowPage } from './yellow.page';

const routes: Routes = [
  {
    path: '',
    component: YellowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YellowPageRoutingModule {}
