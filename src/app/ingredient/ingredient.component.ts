import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  emitter: EventEmitter<IngredientEvent> = new EventEmitter<IngredientEvent>();

  state: string;

  constructor() {
    this.state = 'UNDEFINED';
  }

  ngOnInit() {
  }

  public toggleWanted() {
    if (this.state === 'EXCLUDED' || this.state === 'UNDEFINED') {
      this.emitter.emit({
        name: this.name,
        state: 'WANTED'
      });
      this.state = 'WANTED';
    } else {
      this.emitter.emit({
        name: this.name,
        state: 'RESET'
      });
      this.state = 'UNDEFINED';
    }
  }

  public toggleExclude() {
    if (this.state === 'WANTED' || this.state === 'UNDEFINED') {
      this.emitter.emit({
        name: this.name,
        state: 'EXCLUDED'
      });
      this.state = 'EXCLUDED';
    } else {
      this.emitter.emit({
        name: this.name,
        state: 'RESET'
      });
      this.state = 'UNDEFINED';
    }

  }

}

