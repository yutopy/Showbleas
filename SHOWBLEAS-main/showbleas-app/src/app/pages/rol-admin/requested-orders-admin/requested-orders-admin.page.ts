import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requested-orders-admin',
  templateUrl: './requested-orders-admin.page.html',
  styleUrls: ['./requested-orders-admin.page.scss'],
})
export class RequestedOrdersAdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goProfileAdmin(){
    this.router.navigate(['/profile-admin'])
  }

}
