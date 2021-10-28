import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllProductsWafersUserPageRoutingModule } from './all-products-wafers-user-routing.module';

import { AllProductsWafersUserPage } from './all-products-wafers-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllProductsWafersUserPageRoutingModule
  ],
  declarations: [AllProductsWafersUserPage]
})
export class AllProductsWafersUserPageModule {}
