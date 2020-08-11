import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {YellowPageRoutingModule} from './yellow-routing.module';

import {YellowPage} from './yellow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YellowPageRoutingModule
  ],
  declarations: [YellowPage],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'}
  ]
})
export class YellowPageModule {
}
