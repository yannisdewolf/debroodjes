import {Component, OnInit} from '@angular/core';
import {Broodje} from './broodje';
import {FormControl} from '@angular/forms';
import {combineLatest, forkJoin, from, Observable} from 'rxjs';
import {distinct, distinctUntilChanged, distinctUntilKeyChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'debroodjes';


  ingredient: string;
  observableIngredient = new FormControl('');


  broodjeslijst: Broodje[] = [
    new Broodje('Bruggeling', ['Oud Brugge', 'mesclun', 'tomaat', 'mosterd']),
    new Broodje('Chevre', ['Geitenkaas', 'parmaham', 'krulsalade', 'tomaat']),
    new Broodje('Chorika', ['Chorizo', 'kaas', 'ananas', 'cresson', 'pikante saus']),
    new Broodje('Coupy Loupy', ['Kaas', 'augurk', 'seldersla', 'cocktail', 'cresson', 'tomaat']),
    new Broodje('D hoeve', ['kaas', 'ham', 'wortel', 'maiskorrels', 'sla', 'cocktail']),
    new Broodje('DJ', ['Salami', 'augurk', 'zilveruitjes', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Florida', ['kip curry', 'wortel', 'ananas', 'ei'])
  ];

  filteredList: Broodje[] = [];
  matchedIngredients: string [] = [];

  allingredients: string[] = [];

  constructor() {
    this.filteredList = this.broodjeslijst;

    const listOfLists: string[][]  = this.broodjeslijst.map(broodje => broodje.ingredienten);

    const allIngredients = [].concat.apply([], listOfLists);
    console.log('all ingredients', allIngredients);

    from(allIngredients)
      .pipe(distinct())
      .subscribe((e: string) => this.allingredients.push(e));
  }

  ngOnInit(): void {
    this.observableIngredient.valueChanges.subscribe(val => this.filterBroodjes(val));
  }

  filterBroodjes(ingredient: string): void {
    if (!ingredient || ingredient.length === 0) {
      this.filteredList = this.broodjeslijst;
      this.matchedIngredients = [];
    } else {
      this.filteredList = this.broodjeslijst
        .filter(broodje => broodje.ingredienten.find(e => {
          const isFound = e.toLowerCase().includes(ingredient.toLowerCase());
          return isFound;
        }));

      this.matchedIngredients = this.allingredients.filter(uniqueIngredient => uniqueIngredient.toLowerCase().includes(ingredient));

    }



  }


}
