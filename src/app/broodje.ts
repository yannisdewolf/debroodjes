export class Broodje {

  naam: string;
  ingredienten: string[];

  constructor(naam: string, ingredienten: string[]) {
    this.naam = naam;
    this.ingredienten = ingredienten;
  }

  hasIngredient(ingredient: string): boolean {
    return this.ingredienten.findIndex(i => i.includes(ingredient)) !== -1;
  }


}
