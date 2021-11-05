import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  
  actualDate;
  actualTime;
  domicilio={domicilio:false,residencia:true,otra:''}
  constructor(private nav:NavController) {
    this.getActualDate()
    this.getActualTime()
  }   
  
  getActualDate(){
    var dateObj = new Date()
    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()
    this.actualDate = year + '/' + month + '/' + date;
  }

  getActualTime(){
    var dateObj = new Date()
    var hour = dateObj.getHours().toString()
    var min = dateObj.getMinutes().toString()
    this.actualTime = hour + ":" + min;
  } 

  ir(){
  this.nav.navigateForward('home2')
  }
}

