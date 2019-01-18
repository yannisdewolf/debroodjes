import {Component, OnInit} from '@angular/core';
import {BroodjesService} from '../broodjes.service';
import {Broodje} from '../broodje';

@Component({
  selector: 'app-extendedsearch',
  templateUrl: './extendedsearch.component.html',
  styleUrls: ['./extendedsearch.component.css']
})
export class ExtendedsearchComponent implements OnInit {

  allIngredients: string[];
  wantedIngredient: string[];

  excludedIngredients: string[];
  public excludedChosen: boolean;

  public showSearchResults = false;

  public searchResults: Array<Broodje>;

  constructor(private broodjesService: BroodjesService) {
    this.wantedIngredient = [];
    this.excludedIngredients = [];
  }

  ngOnInit() {
    this.allIngredients = this.broodjesService.getAllIngredients().sort();
  }

  getExcludableIngredients(): Array<string> {
    return this.allIngredients.filter(item => this.wantedIngredient.indexOf(item) < 0);
  }

  markAsExcluded(ingredient: string) {
    this.excludedIngredients = this.excludedIngredients.concat(ingredient);
  }

  clearExcluded() {
    this.excludedIngredients = [];
  }

//  search
  private doSearch() {
    this.showSearchResults = true;
  }

  private newSearch() {
    this.showSearchResults = false;
    this.searchResults = [];
    this.wantedIngredient = [];
    this.excludedIngredients = [];
  }

  private clearSearchResults() {
    this.searchResults = [];
  }

  handleEvent(event: IngredientEvent) {

    if (event.state === 'WANTED') {
      this.wantedIngredient.push(event.name);
    }

    if (event.state === 'EXCLUDED') {
      this.excludedIngredients.push(event.name);
    }

    if (event.state === 'RESET') {
      const foundInWanted = this.wantedIngredient.indexOf(event.name, 0);

      console.log('RESET ' + event.name);
      if (foundInWanted > -1){
        this.wantedIngredient = this.wantedIngredient.filter(el => el !== event.name);
        // this.wantedIngredient = this.wantedIngredient.splice(foundInWanted, 1);
        console.log('removed from wantedIngredient. Now it is', this.wantedIngredient);
      }

      const foundInExcluded = this.excludedIngredients.indexOf(event.name, 0);
      if(foundInExcluded > -1){
        this.excludedIngredients = this.excludedIngredients.filter(el => el !== event.name);
        // this.excludedIngredients = this.excludedIngredients.splice(foundInExcluded, 1);
      }

    }

    this.searchResults = this.broodjesService.getAllBroodjes()
      .filter(broodje => {

        const hasAnyIngredient =
          this.wantedIngredient.length > 0?
          broodje.hasAnyIngredient(this.wantedIngredient) : true;
        const hasNoneIngredient =
          this.excludedIngredients.length > 0?
          broodje.hasNoneIngredient(this.excludedIngredients) : true;

        return hasAnyIngredient && hasNoneIngredient; }
      );

  }
}
