import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from './interfaces/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Title Name';
  rexNumber = /[0-9]{9}/;
  user: Users = new Users();
  logged: boolean = false;
  direccion1 = "Direccion 1";
  direccion2 = "Dirección 2";
  direccionUri1 = "https://www.google.es/maps/URI_MAPS";
  direccionUri2 = "https://www.google.es/maps/URI_MAPS";
  img_background = "assets/img/fondo.jpg";

  ngOnInit() {}

  login(f: NgForm) {
    const user = f.value;
    if ((!this.rexNumber.test(user.telefono)) || (user.telefono.length !== 9)) {
      console.log("El numero es invalido", user.telefono);
      throw {
        formulario: f.invalid,
      };
    }
    this.getUser(user)
  }

  getUser(user: Users) {
    // servicio para la obtención del usuario

    this.user.nombre = "Joe Doe";
    this.user.telefono = 123456789;
    this.user.n_invitados = 2;
    this.user.invitados = [
      {
        nombre: "Cristina Guilar",
        telefono: 987654321,
        responsable: "Joe Doe"
      }
    ];

    if (Number(user.telefono) === this.user.telefono) {
      this.logged = !this.logged;
    } else {
      throw {
        formulario: "Usuario incorrecto"
      }
    }
  }


}
