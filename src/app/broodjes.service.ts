import { Injectable } from '@angular/core';
import {Broodje} from './broodje';

@Injectable({
  providedIn: 'root'
})
export class BroodjesService {

  private broodjeslijst: Broodje[] = [
    new Broodje('Bruggeling', ['Oud Brugge', 'mesclun', 'tomaat', 'mosterd']),
    new Broodje('Chevre', ['Geitenkaas', 'parmaham', 'krulsalade', 'tomaat']),
    new Broodje('Chorika', ['Chorizo', 'kaas', 'ananas', 'cresson', 'pikante saus']),
    new Broodje('Coupy Loupy', ['Kaas', 'augurk', 'seldersla', 'cocktail', 'cresson', 'tomaat']),
    new Broodje('D hoeve', ['kaas', 'ham', 'wortel', 'maiskorrels', 'sla', 'cocktail']),
    new Broodje('DJ', ['Salami', 'augurk', 'zilveruitjes', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Florida', ['kip curry', 'wortel', 'ananas', 'ei'])
  ];


  constructor() {

  }

  getBroodjes(ingredient: string): Broodje[] {
    return this.broodjeslijst.filter(broodje => broodje.ingredienten.find(e => e === ingredient) )
  }

}
