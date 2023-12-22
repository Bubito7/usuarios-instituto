import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  //enrutamos para que podamos usar la funcion, para ello inyectamos en el constructor el servicio router
  constructor(private router: Router, private miServicio: ServicioUsuariosService, private usuarioService: UsuariosService) { }


  //creamos un array de usuarios donde se van a ir almacenando los datos de la inyeccion
  usuarios: Usuario[] = [];

  ngOnInit(): void {

    //almacenamos la informacion de la inyeccion
    this.usuarios = this.usuarioService.usuarios;
    this.usuarioService.obtenerUsuarios().subscribe(misUsuarios=>{
      console.log(misUsuarios);
  
      this.usuarios=Object.values(misUsuarios);
  
      this.usuarioService.setUsuarios(this.usuarios);
    });
  };

  volverAlHome() {
    this.router.navigate([""]);//vacio xq es el href del component del home
  }

  //Para agregar usuario
  agregarUsuario() {
    let miUsuario = new Usuario(this.cuadroNombre, this.cuadroApellido, this.cuadroRol, this.cuadroEmail);//guardamos la instancia usuario y cogemos los datos recogidos del formulario 
    //this.miServicio.mostrarMensaje("Nombre del usuario que va añadir " + miUsuario.nombre);//mostramos la ventana antes de agregar el usuario.
    this.usuarioService.agregarUsuarioServicio(miUsuario);
    
    this.router.navigate([""]);//vacio xq es el href del component del home y nos lleve a el

  }
  //Aqui guardamos la informacion del formulario
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroRol: string = "";
  cuadroEmail: string = "";
}
