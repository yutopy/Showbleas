import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { StorageService, SessionLog } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storageService: StorageService, private router: Router, private http: HttpClient, private navCtrl: NavController) { }

  sessionLogs: SessionLog[] = [];
  newSessionLog: SessionLog = <SessionLog>{};

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type" : "aplication/json"
  });

  email: string;
  password: string;
  respuesta: object;
  id:string;
  token: string;
  role: string;

  ngOnInit() {
  }

  doLogin(){

    let postData = {
      "email":this.email,
      "password":this.password
    }
    this.http.post('http://127.0.0.1:8000/api/auth/login', postData, {headers: this.headers})
    .subscribe(data => {
      console.log(data)
      this.respuesta=data;

      if (this.respuesta['token_type'] == 'Bearer'){

        this.token = this.respuesta['access_token'] + "";
        this.id = this.respuesta['id'] + "";
        this.role = this.respuesta['role'];

        this.saveSession();
        
        if (this.role == "admin")
        {
          this.router.navigate(['/tabs-admin/requested-orders-admin'])
        }
        else if (this.role == "cliente") 
        {
          this.router.navigate(['/tabs-user/index-user'])
        }
      }

    });
  }
  
  saveSession(){
    this.newSessionLog.email = this.email;
    this.newSessionLog.token = this.token;
    this.newSessionLog.id = this.id;
    this.newSessionLog.role = this.role;

    this.storageService.updateSessionLog(this.newSessionLog).then(sessionLog => {
      this.newSessionLog = <SessionLog>{};
    })
  }


  goSignUp(){
    this.router.navigate(['/sign-up'])
  }
}
