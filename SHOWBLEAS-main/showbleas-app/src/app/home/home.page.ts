import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  slides = [
    {
      img: 'assets/img/postre-icon.png',
      title: 'Bienvenidos a </br>Showbleas </br>',
      description: 'Una gran experiencia con las mejores productos a la mejor calidad'
    },
    {
      img: 'assets/img/obleas-icon.png',
      title: 'Conoce nuestra APP',
      description: 'Ingresa o registrate en nuestra aplicación, tendras una aventura con las multiples opciones que se brindan especialmente para ti'
    },
    {
      img: 'assets/img/helado-icon.png',
      title: 'Disfruta',
      description: 'Deleitate con nuestros productos de la manera que desees'
    },
  ]

  goLogin(){
    this.router.navigate(['/login'])
  }

}
