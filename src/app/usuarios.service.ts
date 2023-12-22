import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";
import { ServicioUsuariosService } from "./servicio-usuarios.service";
import { DataServices } from "./data.services";
import { RouterOutlet } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";

@Injectable()//para inyectar servicios
export class UsuariosService {


  //creamos un contructor para poder hacer la inyeccion

  constructor(private servicioVentana: ServicioUsuariosService, private dataService: DataServices,private http: HttpClient) {

  }
  usuarios: Usuario[] = []

  //creamos un array de usuarios donde se van a ir almacenando
  /* usuarios:Usuario[] = [
 
     new Usuario("Gema","de la Loza","Directora","gemlozsan@educativa.com"),
     new Usuario("Pablo","Gutierrez","Alumno","pgutbri@educativa.com"),
     new Usuario("Francisco","Garcia","Profesor","franciscogarc@educativa.com"),
   ];*/

  setUsuarios(misUsuarios:Usuario[]){
    this.usuarios=misUsuarios;
  }
  //funcion para traernos los datos de la BBDD
  obtenerUsuarios() {
    return this.dataService.traerUsuarios();
  }
  


  agregarUsuarioServicio(usuario: Usuario) {

    this.servicioVentana.mostrarMensaje("¿Está seguro que quiere añadir a " + usuario.nombre + "con el rol" + usuario.rol + "?");//ventana antes de agregar el usuario
    this.usuarios.push(usuario);//guardamos en el array el nuevo usuario
    this.dataService.guardarUsuarios(this.usuarios);
  }

  encontrarUsuario(indice: number) {
    let usuario: Usuario = this.usuarios[indice];//busca en el array de usuarios el indice correspondiente

    return usuario;
  }

  actualizaUsuario(indice: number, usuario: Usuario) {
    let usuarioModificado = this.usuarios[indice];//almacenamos en el array la informacion del indice

    usuarioModificado.nombre = usuario.nombre;
    usuarioModificado.apellido = usuario.apellido;
    usuarioModificado.rol = usuario.rol;
    usuarioModificado.email = usuario.email;

    this.dataService.actualizarUsuarios(indice,usuario);

  }

  eliminarUsuario(indice: number) {
    this.usuarios.splice(indice, 1);

    this.dataService.eliminarUsuarios(indice);

    if(this.usuarios!=null) this.dataService.guardarUsuarios(this.usuarios);
  }

}