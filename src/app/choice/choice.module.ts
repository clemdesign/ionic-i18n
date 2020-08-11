import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoicePageRoutingModule } from './choice-routing.module';

import { ChoicePage } from './choice.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoicePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ChoicePage]
})
export class ChoicePageModule {}
