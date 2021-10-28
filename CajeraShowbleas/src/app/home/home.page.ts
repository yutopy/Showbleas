import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate;
  domicilio={domicilio:false,residencia:true,otra:''}
  constructor(private nav:NavController) {
    this.currentDate = new Date();
  }


  
    
  

  ir(){
  this.nav.navigateForward('home2')
  }
}

