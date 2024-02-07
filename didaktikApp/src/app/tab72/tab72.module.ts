import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab72PageRoutingModule } from './tab72-routing.module';

import { Tab72Page } from './tab72.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab72PageRoutingModule
  ],
  declarations: [Tab72Page]
})
export class Tab72PageModule {}
