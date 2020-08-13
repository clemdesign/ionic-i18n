import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedPageRoutingModule } from './red-routing.module';

import { RedPage } from './red.page';
import {TranslocoModule} from '@ngneat/transloco';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedPageRoutingModule,
    TranslocoModule
  ],
  declarations: [RedPage]
})
export class RedPageModule {}
