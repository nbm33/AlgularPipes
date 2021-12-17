import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = "Nicolas Bernal";
  valor: number = 2500;
  objeto = {
    Nombre: "Nicolas",
    Apellido: "Bernal",
    Edad: 40
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);
  }


}

