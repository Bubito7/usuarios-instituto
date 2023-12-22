import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { UsuariosService } from '../usuarios.service';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo = 'Bienvenid@ a Conexión Educativa';


  //inyectamos el servicio en el componente ppal a traves del constructor
  constructor(private miServicio: ServicioUsuariosService, private usuarioService: UsuariosService, private loginService: LoginService, private router: Router, private route: ActivatedRoute, private data: DataServices) {

  }
  //para recibir la informacion del formulario 
  login(form: NgForm) {

    const email = form.value.email

    const password = form.value.password

    this.loginService.login(email, password);
  }

  ngOnInit(): void {

    //almacenamos la informacion de la inyeccion
    // this.usuarios = this.usuarioService.usuarios;
    this.usuarioService.obtenerUsuarios().subscribe(misUsuarios => {


      this.usuarios = Object.values(misUsuarios);

      this.usuarioService.setUsuarios(this.usuarios);

      console.log(misUsuarios);


    });


  }


  //creamos un array de usuarios donde se van a ir almacenando los datos de la inyeccion
  usuarios: Usuario[] = [];

  //Aqui guardamos la informacion del formulario
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroRol: string = "";
  cuadroEmail: string = "";


  //Para agregar usuario
  agregarUsuario() {
    let miUsuario = new Usuario(this.cuadroNombre, this.cuadroApellido, this.cuadroRol, this.cuadroEmail);//guardamos la instancia usuario y cogemos los datos recogidos del formulario 
    //this.miServicio.mostrarMensaje("Nombre del usuario que va añadir " + miUsuario.nombre);//mostramos la ventana antes de agregar el usuario.
    this.usuarioService.agregarUsuarioServicio(miUsuario);
    //this.router.navigate([""]);

  }
}




