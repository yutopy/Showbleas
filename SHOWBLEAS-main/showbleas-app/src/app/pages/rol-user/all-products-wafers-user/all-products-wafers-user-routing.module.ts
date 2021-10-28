import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllProductsWafersUserPage } from './all-products-wafers-user.page';

const routes: Routes = [
  {
    path: '',
    component: AllProductsWafersUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllProductsWafersUserPageRoutingModule {}
