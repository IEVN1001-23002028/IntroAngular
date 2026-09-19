import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

  heroes:IHeroes[]=[
    {
    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Goku',
    description:'Kame Hame Ha',
    race:'Saiyan',
    ki:9000
    },
    {
    imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
    nombre:'Vegeta',
    description:'Principe de los Saiyans',
    race:'Saiyan',
    ki:8900
    },
    {
    imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
    nombre:'Picolo',
    description:'Namekiano',
    race:'Namekian',
    ki:8000
    },
    {
    imagen:'https://dragonball-api.com/characters/Freezer.webp',
    nombre:'Freezer',
    description:'Tirano Espacial',
    race:'Frieza Race',
    ki:8200
    }
  ]
}
