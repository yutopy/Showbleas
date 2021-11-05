import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCajeraPage } from './home-cajera.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCajeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCajeraPageRoutingModule {}
