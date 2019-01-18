import * as _ from 'underscore';

export class Broodje {

  naam: string;
  ingredienten: string[];


  constructor(naam: string, ingredienten: string[]) {
    this.naam = naam;
    this.ingredienten = _.map(ingredienten, value => value.toLowerCase()).sort((a, b) => a.localeCompare(b)) ;
  }

  hasIngredient(ingredient: string): boolean {
    return this.ingredienten.findIndex(i => i.includes(ingredient)) !== -1;
  }

  ingredientString() : string {
    return _.reduce(this.ingredienten, (first, second) => first + ', ' + second);
  }

  hasAnyIngredient(wantedIngredient: string[]): boolean{
    return _.intersection(this.ingredienten, wantedIngredient).length > 0 ;
  }

  hasNoneIngredient(excludedIngredient: string[]): boolean {
    return _.intersection(this.ingredienten, excludedIngredient).length == 0;
  }

}
