import { Component } from "@angular/core";
@Component({
    selector: 'app-peso',
    templateUrl: './FormulaPeso.html',
  })

export class FormulaPeso{
    gravedad = 9.8;
    peso:number = 0;
    constructor (){   
    }

    calcularPeso(masa:number) {
        this.peso = masa*this.gravedad;
        return this.peso;
        
  
    }
    


}
