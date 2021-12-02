import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPedidoPageRoutingModule } from './registro-pedido-routing.module';

import { RegistroPedidoPage } from './registro-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPedidoPageRoutingModule
  ],
  declarations: [RegistroPedidoPage]
})
export class RegistroPedidoPageModule {}
