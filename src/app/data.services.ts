import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";
import { LoginService } from "./login/login.service";
import { Observable } from "rxjs";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){}

    
    //traernos los usuarios creados de las BBDD
    
    traerUsuarios(){


        const token= this.loginService.getIdToken();
        return this.httpClient.get('https://conexion-educativa-d2e7b-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }

    
    actualizarUsuarios(indice:number,usuario:Usuario){
        const token= this.loginService.getIdToken();
        let url = 'https://conexion-educativa-d2e7b-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + ".json?auth=" + token;

        this.httpClient.put(url,usuario).subscribe(
         

            response=>console.log("Se han modificado los usuarios con exito: " + response),
            

            );
    }
    eliminarUsuarios(indice:number){
        const token= this.loginService.getIdToken();
        let url = 'https://conexion-educativa-d2e7b-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + ".json?auth=" + token;

        this.httpClient.delete(url).subscribe(
         

            response=>console.log("Se han eliminado el usuario con exito: " + response)
            
            

            );
    }
    
    //metodo para guardar usuarios

    guardarUsuarios(usuarios:Usuario[]){
        const token= this.loginService.getIdToken();
        this.httpClient.put('https://conexion-educativa-d2e7b-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token,
         usuarios).subscribe(
            response=>console.log("Se han guardado los usuarios con exito: " + response),
         );
   
    }}


