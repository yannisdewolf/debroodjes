import {Component, OnInit} from '@angular/core';
import {Broodje} from './broodje';
import {FormControl} from '@angular/forms';
import {BroodjesService} from './broodjes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

}
