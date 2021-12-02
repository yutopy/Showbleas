import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-pedido',
  templateUrl: './registro-pedido.page.html',
  styleUrls: ['./registro-pedido.page.scss'],
})
export class RegistroPedidoPage implements OnInit {

  actualDate;
  actualTime;
  constructor(private nav:NavController) {
    this.getActualDate()
    this.getActualTime()
   }
   entry=[false,false,false,false];

  getActualDate(){
    var dateObj = new Date()
    var year = dateObj.getFullYear().toString() 
    var month = dateObj.getMonth().toString()
    var day = dateObj.getDay().toString()
    this.actualDate =  year + '/' + month + '/' + day
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
    this.nav.navigateForward('resumen-pedido');
  }

}
