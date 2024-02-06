import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab63PageRoutingModule } from './tab63-routing.module';

import { Tab63Page } from './tab63.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab63PageRoutingModule
  ],
  declarations: [Tab63Page]
})
export class Tab63PageModule {}
