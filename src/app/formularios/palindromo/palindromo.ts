import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})

export class Palindromo {

  frase: string = '';

  vocalesEncontradas: string[] = [];
  consonantesEncontradas: string[] = [];

  cantidadVocales: number = 0;
  cantidadConsonantes: number = 0;

  mensajePalindromo: string = '';

  analizar(): void {

    this.vocalesEncontradas = [];
    this.consonantesEncontradas = [];

    this.cantidadVocales = 0;
    this.cantidadConsonantes = 0;

    this.mensajePalindromo = '';

    let vocales: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let fraseNormal: string[] = [];
    let fraseInvertida: string[] = [];

    for (let letra of this.frase) {

      let esVocal: boolean = false;

      for (let vocal of vocales) {

        if (letra === vocal) {
          esVocal = true;
        }

      }

      if (esVocal) {

        this.vocalesEncontradas[this.cantidadVocales] = letra;
        this.cantidadVocales++;

      } else if (
        (letra >= 'a' && letra <= 'z') ||
        (letra >= 'A' && letra <= 'Z')
      ) {

        this.consonantesEncontradas[this.cantidadConsonantes] = letra;
        this.cantidadConsonantes++;

      }

      if (
        (letra >= 'a' && letra <= 'z') ||
        (letra >= 'A' && letra <= 'Z')
      ) {

        let posicion: number = 0;

        for (let elemento of fraseNormal) {
          posicion++;
        }

        fraseNormal[posicion] = letra;

        let nuevaInvertida: string[] = [];
        let indice: number = 1;

        nuevaInvertida[0] = letra;

        for (let elemento of fraseInvertida) {
          nuevaInvertida[indice] = elemento;
          indice++;
        }

        fraseInvertida = nuevaInvertida;
      }

    }

    let iguales: boolean = true;
    let posicion: number = 0;

    for (let letra of fraseNormal) {

      let letraNormal: string = letra;
      let letraInvertida: string = fraseInvertida[posicion];

      if (
        letraNormal === 'A' ||
        letraNormal === 'E' ||
        letraNormal === 'I' ||
        letraNormal === 'O' ||
        letraNormal === 'U'
      ) {

        let mayusculas: string[] = ['A', 'E', 'I', 'O', 'U'];
        let minusculas: string[] = ['a', 'e', 'i', 'o', 'u'];

        let indiceVocal: number = 0;

        for (let vocal of mayusculas) {

          if (letraNormal === vocal) {
            letraNormal = minusculas[indiceVocal];
          }

          indiceVocal++;
        }

      }

      if (
        letraInvertida === 'A' ||
        letraInvertida === 'E' ||
        letraInvertida === 'I' ||
        letraInvertida === 'O' ||
        letraInvertida === 'U'
      ) {

        let mayusculas: string[] = ['A', 'E', 'I', 'O', 'U'];
        let minusculas: string[] = ['a', 'e', 'i', 'o', 'u'];

        let indiceVocal: number = 0;

        for (let vocal of mayusculas) {

          if (letraInvertida === vocal) {
            letraInvertida = minusculas[indiceVocal];
          }

          indiceVocal++;
        }

      }

      if (letraNormal !== letraInvertida) {
        iguales = false;
      }

      posicion++;
    }

    if (iguales) {
      this.mensajePalindromo = 'La frase sí es un palíndromo.';
    } else {
      this.mensajePalindromo = 'La frase no es un palíndromo.';
    }

  }
}