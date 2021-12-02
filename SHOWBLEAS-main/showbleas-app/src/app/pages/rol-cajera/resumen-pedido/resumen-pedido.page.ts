import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.page.html',
  styleUrls: ['./resumen-pedido.page.scss'],
})
export class ResumenPedidoPage implements OnInit {

  actualDate;
  actualTime;

  constructor(private nav:NavController) { 
    this.getActualDate()
    this.getActualTime()
  }

  getActualDate(){
    var dateObj = new Date()
    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var day = dateObj.getDay().toString()
    this.actualDate = year + "/" + month + "/" + day;
  }
  
  getActualTime(){
    var dateObj = new Date()
    var hour = dateObj.getHours().toString()
    var minute = dateObj.getMinutes().toString()
    this.actualTime = hour + ":" + minute
  }

  ngOnInit() {
  }

}
