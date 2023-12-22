import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-hijo',
  templateUrl: './usuario-hijo.component.html',
  styleUrls: ['./usuario-hijo.component.css']
})
export class UsuarioHijoComponent {
usuarios: any;
agregarUsuario() {
throw new Error('Method not implemented.');
}

  //tenemos que pasar de sintais estrcicta a no estricta a traves del tsconfig.app.json
  @Input() usuarioDeLista: Usuario;
  @Input() indice: number;

  

}
