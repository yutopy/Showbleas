import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

export class HomePage{
  currentDate;
  constructor(public navCtrl: NavController){
    this.currentDate = new Date();
  }
}
