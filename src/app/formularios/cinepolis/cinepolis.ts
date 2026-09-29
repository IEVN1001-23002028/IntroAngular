import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  imports: [FormsModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'

})
export class Cinepolis {
  Nombre: string='';
  Compradores: number=0;
  TarjetaCine: boolean=false;
  CantidadBoletos:number=0;
  CostoPagar: number=0;
  mensaje: string='';

  Procesar(){
    this.CostoPagar = 0;
    this.mensaje='';

    if (this.Nombre == ''){
      this.mensaje= "Ingrese un nombre"
      return;
    }

    if (this.Compradores <= 0){
      this.mensaje="Agrega la cantidad de compradores"
      return;
    }

    if (this.CantidadBoletos <= 0){
      this.mensaje="Ingresa una cantidad de boletos valida a comprar"
      return;
    }
    
    let maximoBoletos = this.Compradores * 7;

    if (this.CantidadBoletos > maximoBoletos){
      this.mensaje= "Cantidad de boletos invalida";
      return;
    }

    let SubTotal = this.CantidadBoletos * 12;
    let descuento = 0;

    if (this.CantidadBoletos > 5){
      descuento = 0.15;
    } else if (this.CantidadBoletos >= 3){
      descuento = 0.10;
    }

    let CantidadDescuento = SubTotal * descuento;
    let total = SubTotal - CantidadDescuento;

    if (this.TarjetaCine){
      total = total -(total * 0.10); 
    }
    this.CostoPagar= total;
    this.mensaje='';
  }
  Limpiar(){
    this.Nombre='';
    this.Compradores=0;
    this.TarjetaCine= false;
    this.CantidadBoletos=0;
    this.CostoPagar=0;
    this.mensaje='';
  }
}