import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab52PageRoutingModule } from './tab52-routing.module';

import { Tab52Page } from './tab52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab52PageRoutingModule
  ],
  declarations: [Tab52Page]
})
export class Tab52PageModule {}
