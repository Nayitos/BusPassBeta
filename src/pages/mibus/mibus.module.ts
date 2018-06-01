import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MibusPage } from './mibus';

@NgModule({
  declarations: [
    MibusPage,
  ],
  imports: [
    IonicPageModule.forChild(MibusPage),
  ],
})
export class MibusPageModule {}
