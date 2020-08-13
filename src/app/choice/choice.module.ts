import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoicePageRoutingModule } from './choice-routing.module';

import { ChoicePage } from './choice.page';
import {TranslocoModule} from '@ngneat/transloco';
import {TranslocoLocaleModule} from '@ngneat/transloco-locale';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoicePageRoutingModule,
    TranslocoModule,
    TranslocoLocaleModule
  ],
  declarations: [ChoicePage]
})
export class ChoicePageModule {}
