import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab45PageRoutingModule } from './tab45-routing.module';

import { Tab45Page } from './tab45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab45PageRoutingModule
  ],
  declarations: [Tab45Page]
})
export class Tab45PageModule {}
