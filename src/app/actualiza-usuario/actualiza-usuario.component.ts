import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-actualiza-usuario',
  templateUrl: './actualiza-usuario.component.html',
  styleUrls: ['./actualiza-usuario.component.css']
})
export class ActualizaUsuarioComponent {


//enrutamos para que podamos usar la funcion, para ello inyectamos en el constructor el servicio router
constructor(private router: Router,private route:ActivatedRoute, private miServicio: ServicioUsuariosService, private usuarioService: UsuariosService) { }


//creamos un array de usuarios donde se van a ir almacenando los datos de la inyeccion
usuarios: Usuario[] = [];

//Aqui guardamos la informacion del formulario
cuadroNombre: string = "";
cuadroApellido: string = "";
cuadroRol: string = "";
cuadroEmail: string = "";

indice:number;
realizar:number;

ngOnInit(): void {

  this.realizar=parseInt(this.route.snapshot.queryParams['accion']);

  //almacenamos la informacion de la inyeccion
  this.usuarios = this.usuarioService.usuarios;

  this.indice=this.route.snapshot.params['id'];//almacenamos el indice de la ruta

  let usuario:Usuario= this.usuarioService.encontrarUsuario(this.indice);

  this.cuadroNombre=usuario.nombre;
  this.cuadroApellido=usuario.apellido;
  this.cuadroRol=usuario.rol;
  this.cuadroEmail=usuario.email;
};

volverAlHome() {
  this.router.navigate([""]);//vacio xq es el href del component del home
}


actualizaUsuario() {

  if(this.realizar == 1){
  let usuario = new Usuario(this.cuadroNombre, this.cuadroApellido, this.cuadroRol, this.cuadroEmail);//guardamos la instancia usuario y cogemos los datos recogidos del formulario 
  //this.miServicio.mostrarMensaje("Nombre del usuario que va añadir " + miUsuario.nombre);//mostramos la ventana antes de agregar el usuario.
  this.usuarioService.actualizaUsuario(this.indice,usuario)
 
  this.router.navigate([""]);//vacio xq es el href del component del home y nos lleve a el
  

  }
else{
  this.usuarioService.eliminarUsuario(this.indice);
  
  this.router.navigate([""]);//vacio xq es el href del component del home y nos lleve a el
  
}
}


}
