import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions-user',
  templateUrl: './promotions-user.page.html',
  styleUrls: ['./promotions-user.page.scss'],
})
export class PromotionsUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goShoppingCart(){
    this.router.navigate(['/shopping-cart-user'])
  }
}
