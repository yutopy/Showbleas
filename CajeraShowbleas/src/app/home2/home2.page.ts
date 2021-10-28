import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(private nav:NavController) { }

  entry=[false,false,false,false];
  
  ngOnInit() {
  }
ir(){
  this.nav.navigateForward('home3');
}
}
