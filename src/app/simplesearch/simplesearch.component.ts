import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Broodje} from '../broodje';
import {BroodjesService} from '../broodjes.service';

@Component({
  selector: 'app-simplesearch',
  templateUrl: './simplesearch.component.html',
  styleUrls: ['./simplesearch.component.css']
})
export class SimplesearchComponent implements OnInit {

  observableIngredient = new FormControl('');

  broodjeslijst: Broodje[];

  filteredList: Broodje[] = [];
  matchedIngredients: string [] = [];

  constructor(private broodjesService: BroodjesService) {

    this.broodjeslijst = this.broodjesService.getAllBroodjes();

    this.filteredList = this.broodjeslijst;

  }

  ngOnInit(): void {
    this.observableIngredient.valueChanges.subscribe(val => this.filterBroodjes(val));
  }

  filterBroodjes(ingredient: string): void {
    if (!ingredient || ingredient.length === 0) {
      this.filteredList = this.broodjesService.getAllBroodjes();
      this.matchedIngredients = [];
    } else {
      this.matchedIngredients = this.broodjesService.getMatchingIngredients(ingredient);

      this.filteredList = this.broodjesService.getBroodjesWithAnyIngredient(this.matchedIngredients);
    }


  }

}
