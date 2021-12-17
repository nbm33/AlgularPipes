import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //Pipe i18nSelecte
  genero: string[] = ["masculino", "femenino"];
  
  nombre1: string = "Nicolas";
  genero1: string = this.genero[0];

  nombre2: string = "Tatiana";
  genero2: string = this.genero[1];


  pipeInvitacion = {
    masculino: "invitarlo",
    femenino: "invetarla",
  }

   //Pipe i18nPlural

   clientes1: string[] = ["fernando"];
   clientes2: string[] = ["fernando", "Maria"];
   clientes3: string[] = ["fernando", "Maria", "Karina", "Cramen", "Julia", "Elvira"];

   pipePlural = {
    "=0": "No tenemos clientes conectados",
    "=1": "tenemos un cliente conectado",
    "=2": "tenemos dos cliente conectado",
    "other": "tenemos # clientes conectados"
  }

  cambiarCliente(){
    this.nombre1 = this.nombre2;
    this.genero1 = this.genero2;
  }

  borrarCliente(){
    this.clientes3.pop();
  }

  //Pipe keyValue Pipes

  persona = {
    nombre: "Nicolas",
    apellido: "Bernal",
    edad: 40,
    Cedula: 80181745,
    pais: "Colombia"
  }

    //Async Pipes

    Observable = interval(500);

    Promesa = new Promise((resolve, reject) => {

        setTimeout(() =>{
          resolve("Mensaje generado despues de 3 segundo");
        }, 3000);
    })

}
