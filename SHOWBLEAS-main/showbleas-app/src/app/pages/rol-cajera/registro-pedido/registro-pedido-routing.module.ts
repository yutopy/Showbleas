import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPedidoPage } from './registro-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPedidoPageRoutingModule {}
