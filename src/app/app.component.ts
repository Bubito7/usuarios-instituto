import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;





  constructor(private loginService:LoginService) {

  }
  ngOnInit(): void {

    firebase.initializeApp({

      apiKey: "AIzaSyA1Awhnxv9pFPoq4o5Hvjts0zdlYvbSkZo",
      authDomain: "conexion-educativa-d2e7b.firebaseapp.com",

    });



  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  noLogueado(){
    return this.loginService.noLogueado();
  }
}