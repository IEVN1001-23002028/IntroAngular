import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { DistanciaComponent } from './formularios/distancia/distancia';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Areas } from './formularios/areas/areas';
import { Usuario } from './formularios/usuario/usuario';
import { PalindromoComponent } from './formularios/palindromo/palindromo';
import { Cinepolis } from './formularios/cinepolis/cinepolis';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    DistanciaComponent,
    OperasBas,
    Areas,
    Usuario,
    ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PalindromoComponent, Cinepolis],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
