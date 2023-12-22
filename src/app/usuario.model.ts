export class Usuario{

    constructor(nombre:string,apellido:string,rol:string,email:string){
        this.nombre= nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.email = email;
    }


    nombre:string="";
    apellido:string="";
    rol:string="";
    email:string="";

}