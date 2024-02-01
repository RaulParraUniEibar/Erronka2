import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab44PageRoutingModule } from './tab44-routing.module';

import { Tab44Page } from './tab44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab44PageRoutingModule
  ],
  declarations: [Tab44Page]
})
export class Tab44PageModule {}
