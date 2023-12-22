import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-usuario-atributos',
  templateUrl: './usuario-atributos.component.html',
  styleUrls: ['./usuario-atributos.component.css']
})
export class UsuarioAtributosComponent {

  @Output() atributosUsuarios = new EventEmitter<string>();


//Inyectamos el servicio en el componente hijo
  //constructor(private miServicio:ServicioUsuariosService){};



  agregaAtributos(value:string){
    //this.miServicio.mostrarMensaje(value);//sale la ventana emergente antes de agregar el atributo
    //this.atributosUsuarios.emit(value);
  }

}
