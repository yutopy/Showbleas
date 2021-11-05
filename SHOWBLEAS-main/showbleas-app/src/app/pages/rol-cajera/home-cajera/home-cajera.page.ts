import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-cajera',
  templateUrl: './home-cajera.page.html',
  styleUrls: ['./home-cajera.page.scss'],
})
export class HomeCajeraPage implements OnInit {

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

  ngOnInit() {
  }

  ir(){
    this.nav.navigateForward('home')
    }

}







  

   

  
