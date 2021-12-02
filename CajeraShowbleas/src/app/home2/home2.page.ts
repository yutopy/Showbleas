import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

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
    this.nav.navigateForward('home3');
  }
}
