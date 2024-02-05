import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab51PageRoutingModule } from './tab51-routing.module';

import { Tab51Page } from './tab51.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab51PageRoutingModule
  ],
  declarations: [Tab51Page]
})
export class Tab51PageModule {}
