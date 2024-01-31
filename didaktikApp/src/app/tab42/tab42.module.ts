import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab42PageRoutingModule } from './tab42-routing.module';

import { Tab42Page } from './tab42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab42PageRoutingModule
  ],
  declarations: [Tab42Page]
})
export class Tab42PageModule {}
