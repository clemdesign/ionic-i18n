import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoicePage } from './choice.page';

const routes: Routes = [
  {
    path: '',
    component: ChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoicePageRoutingModule {}
