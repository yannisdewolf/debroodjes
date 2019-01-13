import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilterPipe} from './broodjesfilter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BroodjeComponent } from './broodje/broodje.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BroodjeComponent
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
