import { Component} from '@angular/core';
import { Heroe, Color } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  onOff: boolean = true;
  heroes: Heroe[] = [
    { 
      nombre: "Superman",
      vuela: true,
      color: Color.Azul
    },
    { 
      nombre: "Batman",
      vuela: false,
      color: Color.Negro
    },
    { 
      nombre: "Robin",
      vuela: false,
      color: Color.Rojo
    },
    { 
      nombre: "Linterna Verde",
      vuela: true,
      color: Color.Verde
    },
    { 
      nombre: "Mujer Maravilla",
      vuela: true,
      color: Color.Azul
    }


  ];
  
  cambiarMayuscula(){
    this.onOff = !this.onOff ;
  }

  cambiar(){
    
  }

}
