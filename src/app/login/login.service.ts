import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService{

    constructor(private router:Router,private cookies:CookieService){}

    token:string;

    login(email:string,password:string){

        firebase.auth().signInWithEmailAndPassword(email,password).then(

            response=>{

                firebase.auth().currentUser?.getIdToken().then(//promesa

                    token=>{
                        this.token=token;
                        this.cookies.set("token",this.token);
                        this.router.navigate(["/"]);
                    }
                )
            }
        );
    }

    getIdToken(){
        //return this.token;
        return this.cookies.get("token");
    }

    estaLogueado(){
        //return this.token;
        return this.cookies.get("token");
    }

    noLogueado(){
        firebase.auth().signOut().then(()=>{

           this.token="";
           this.cookies.set("token",this.token);
           this.router.navigate(["/"]);
           window.location.reload();

        });
    }
}