import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsuarioHijoComponent } from './usuario-hijo/usuario-hijo.component';
import { UsuarioAtributosComponent } from './usuario-atributos/usuario-atributos.component';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { UsuariosService } from './usuarios.service';

import { NotasComponent } from './notas/notas.component';
import { HomeComponent } from './home/home.component';

import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaUsuarioComponent } from './actualiza-usuario/actualiza-usuario.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'; 

import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

//creamos una constante de las rutas y las almacenamos
const appRutas:Routes = [
  {path:'', component:HomeComponent},
  {path:'agregar', component:NotasComponent,canActivate:[LoginGuardian]},
 
  {path:'contacto', component:ContactoComponent,canActivate:[LoginGuardian]},
  {path:'actualiza/:id', component:ActualizaUsuarioComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  declarations: [//registramos los componentes
    AppComponent,
    UsuarioHijoComponent,
    UsuarioAtributosComponent,
    NotasComponent,
    HomeComponent,
    ContactoComponent,
    ActualizaUsuarioComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRutas),//importamos y decimos donde van las rutas
    HttpClientModule

  ],
  providers: [ServicioUsuariosService,UsuariosService,DataServices,LoginService,CookieService,LoginGuardian],//aqui registramos los servicios que vamos creando
  bootstrap: [AppComponent]
})
export class AppModule { }
