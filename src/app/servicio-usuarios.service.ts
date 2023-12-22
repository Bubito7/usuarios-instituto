//este servicio lo hemos creado para crear una ventana emergente.Lo vamos a usar en el componente ppal(ts) y en el de los atributos  
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() { }

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }
}
