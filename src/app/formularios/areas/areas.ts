import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})

export class Areas {

  figura: string = '';

  base: string = '';
  altura: string = '';
  radio: string = '';
  lado: string = '';
  apotema: string = '';

  resultado: number = 0;

  calcularArea(): void {

    switch (this.figura) {

      case 'triangulo':
        this.resultado =
          (parseFloat(this.base) * parseFloat(this.altura)) / 2;
        break;

      case 'circulo':
        this.resultado =
          Math.PI * parseFloat(this.radio) * parseFloat(this.radio);
        break;

      case 'rectangulo':
        this.resultado =
          parseFloat(this.base) * parseFloat(this.altura);
        break;

      case 'pentagono':
        this.resultado =
          ((parseFloat(this.lado) * 5) * parseFloat(this.apotema)) / 2;
        break;

      default:
        this.resultado = 0;
        break;
    }
  }
}