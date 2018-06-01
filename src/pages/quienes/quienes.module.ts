import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuienesPage } from './quienes';

@NgModule({
  declarations: [
    QuienesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuienesPage),
  ],
})
export class QuienesPageModule {}
