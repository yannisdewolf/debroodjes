import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilterPipe} from './broodjesfilter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BroodjeComponent } from './broodje/broodje.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { SimplesearchComponent } from './simplesearch/simplesearch.component';
import { ExtendedsearchComponent } from './extendedsearch/extendedsearch.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BroodjeComponent,
    IngredientComponent,
    SimplesearchComponent,
    ExtendedsearchComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
