import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.page.html',
  styleUrls: ['./index-user.page.scss'],
})
export class IndexUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCreateWafer(){
    this.router.navigate(['/create-wafer-user'])
  }

  goAllWafers(){
    this.router.navigate(['/all-products-wafers-user'])
  }

  goAllIceCreamGlasses(){
    this.router.navigate(['/all-products-ice-cream-glasses-user'])
  }

  goAllDesserts(){
    this.router.navigate(['/all-products-desserts-user'])
  }

  goInfoProduct(){
    this.router.navigate(['/info-product-user'])
  }

  goShoppingCart(){
    this.router.navigate(['/shopping-cart-user'])
  }

}
