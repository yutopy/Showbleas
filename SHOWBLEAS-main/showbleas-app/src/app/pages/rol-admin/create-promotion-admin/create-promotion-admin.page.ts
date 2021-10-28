import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-promotion-admin',
  templateUrl: './create-promotion-admin.page.html',
  styleUrls: ['./create-promotion-admin.page.scss'],
})
export class CreatePromotionAdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPromotionsAdmin(){
    this.router.navigate(['/tabs-admin/promotions-admin'])
  }

  AddPromotion(){
    console.log('Estas intentando añadir una promoción')
  }
}
