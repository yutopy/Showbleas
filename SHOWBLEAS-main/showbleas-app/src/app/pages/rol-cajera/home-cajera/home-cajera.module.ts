import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCajeraPageRoutingModule } from './home-cajera-routing.module';

import { HomeCajeraPage } from './home-cajera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCajeraPageRoutingModule
  ],
  declarations: [HomeCajeraPage]
})
export class HomeCajeraPageModule {}
