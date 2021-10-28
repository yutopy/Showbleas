import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotions-admin',
  templateUrl: './promotions-admin.page.html',
  styleUrls: ['./promotions-admin.page.scss'],
})
export class PromotionsAdminPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goCreatePromotion(){
    this.router.navigate(['/create-promotion-admin'])
  }

  goInfoPromotion(){
    this.router.navigate(['/info-product-admin'])
  }
  goProfileAdmin(){
    this.router.navigate(['/profile-admin'])
  }
}
