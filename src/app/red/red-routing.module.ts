import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedPage } from './red.page';

const routes: Routes = [
  {
    path: '',
    component: RedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedPageRoutingModule {}
