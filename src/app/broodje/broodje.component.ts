import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-broodje',
  templateUrl: './broodje.component.html',
  styleUrls: ['./broodje.component.css']
})
export class BroodjeComponent implements OnInit {

  @Input()
  ingredients: Array<string>;

  @Input()
  selectedIngredients: Array<string>

  constructor() { }

  ngOnInit() {
  }

  public isSearchedIngredient(ingr: string): boolean {
    return this.selectedIngredients.filter(si => si.includes(ingr)).length !== 0;
  }


}
