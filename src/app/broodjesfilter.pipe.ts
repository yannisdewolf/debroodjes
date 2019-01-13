import {Pipe, PipeTransform} from '@angular/core';
import {Broodje} from './broodje';

@Pipe({
  name: 'ingredient'
})
export class FilterPipe implements PipeTransform {
  transform(broodjes: Broodje[], ingredient: string): any[] {

    if (!broodjes) {
      return [];
    }
    if (!ingredient) {
      return broodjes;
    }

    ingredient = ingredient.toLowerCase();
    return broodjes.filter(broodje => broodje.ingredienten.find(e => e.toLowerCase().includes(ingredient)) );

  }
}
