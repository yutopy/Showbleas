import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {
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
