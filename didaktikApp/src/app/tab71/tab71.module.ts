import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab71PageRoutingModule } from './tab71-routing.module';

import { Tab71Page } from './tab71.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab71PageRoutingModule
  ],
  declarations: [Tab71Page]
})
export class Tab71PageModule {}
