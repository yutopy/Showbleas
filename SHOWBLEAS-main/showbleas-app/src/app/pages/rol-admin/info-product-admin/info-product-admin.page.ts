import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-product-admin',
  templateUrl: './info-product-admin.page.html',
  styleUrls: ['./info-product-admin.page.scss'],
})
export class InfoProductAdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(){
    console.log('Estas intentando eliminar el producto');
    
  }

  goEditProduct(){
    console.log('Se estan intentando Guardar Cambios');
    
  }

}
