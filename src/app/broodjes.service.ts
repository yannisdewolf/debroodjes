import {Injectable} from '@angular/core';
import {Broodje} from './broodje';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {distinct, map} from 'rxjs/operators';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class BroodjesService {

  allingredients: Array<string> = [];
  private broodjesLijst$: BehaviorSubject<Array<Broodje>>;

  private broodjeslijst: Broodje[] = [
    new Broodje('Abraham', ['Fricandon', 'ui', 'augurken', 'mayo', 'curryketchup']),
    new Broodje('Aerobic', ['Eiersalade', 'tomaat', 'cresson', 'wortels']),
    new Broodje('Ardennais', ['Ardeense ham', 'augurken', 'mosterd', 'sla', 'tomaat']),
    new Broodje('Argenteuil', ['Ham', 'asperges', 'augurk', 'ei', 'tomaat', 'sla', 'cocktail']),
    new Broodje('Barbaar', ['préparé', 'augurken', 'tartaar', 'sla', 'tomaat']),
    new Broodje('Bella Italia', ['Toscaanse préparé', 'parmezaan', 'krulsalade', 'tomaat']),
    new Broodje('Big Snack', ['Kaas', 'ham', 'préparé', 'komkommer', 'ei', 'cocktail', 'sla', 'tomaat']),
    new Broodje('Boefer', ['Rosbief', 'eiersalade', 'sla', 'tomaat']),
    new Broodje('Boulet Deluxe', ['Boulet', 'tomatenketchup', 'gele bickysaus', 'gedroogde ui']),
    new Broodje('Bourgondier', ['Chevre', 'gandaham', 'sla', 'tomaat', 'komkommer', 'ei']),
    new Broodje('Braziliaan', ['Grijze garnaalsalade', 'tomaat', 'peterselie', 'verse ui', 'komkommer', 'sla']),
    new Broodje('Buffalo', ['préparé', 'gele bickysaus', 'geroosterde ui', 'sla', 'augurken']),
    new Broodje('Bruggeling', ['Oude brugge', 'mesclun', 'tomaat', 'mosterd']),
    new Broodje('Carpaccio', ['Rosbief', 'parmezaanschilfers', 'rucola', 'olijfolie', 'dressing', 'peper']),
    new Broodje('Ché-Ché', ['Kaas', 'préparé', 'ei', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Chef', ['préparé', 'wortels', 'cresson', 'tomaat', 'ananas', 'cocktail']),
    new Broodje('Chévre', ['Geitenkaas', 'parmaham', 'krulsalade', 'tomaat']),
    new Broodje('Chorika', ['Chorizo', 'kaas', 'ananas', 'cresson', 'pikante saus']),
    new Broodje('Coupy Lou', ['Kaas', 'augurk', 'seldersla', 'cocktail', 'cresson', 'tomaat']),
    new Broodje('D hoeve', ['Kaas', 'ham', 'wortels', 'maiskorrels', 'sla', 'cocktail']),
    new Broodje('DJ', ['Salami', 'augurk', 'zilveruitjes', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Firenzé', ['Varkensgebraad', 'verse ui', 'mosterd', 'olijfolie', 'sla', 'tomaat']),
    new Broodje('Florida', ['Kip curry', 'sla', 'wortel', 'ananas', 'ei']),
    new Broodje('Genteneir', ['Gandaham', 'rode pesto', 'zongedroogde tomaten', 'parmezaan']),
    new Broodje('Griek', ['préparé', 'champion a la grécque', 'augurk', 'sla', 'tomaat']),
    new Broodje('Griekse smos', ['Kaas', 'ham', 'champion a la grécque', 'augurk', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Hawai', ['Kaas', 'ham', 'ei', 'ananas', 'cocktail', 'sla', 'tomaat']),
    new Broodje('italiaan', ['Gandaham', 'zilveruitjes', 'mosterd', 'sla', 'tomaat']),
    new Broodje('Jardiniére', ['Westlite', 'verse ui', 'peterselie', 'sla', 'tomaat']),
    new Broodje('Joppie', ['préparé', 'ham', 'sla', 'tomaat', 'joppiesaus']),
    new Broodje('K-twee', ['Kaas', 'kippenwit', 'sla', 'looksaus']),
    new Broodje('La mer', ['Gerookte zalm', 'kruidenkaas']),
    new Broodje('Light', ['Krabsalade', 'wortels', 'ananas', 'sla', 'tomaat']),
    new Broodje('Maison', ['Ham', 'kruidenkaas', 'ei', 'sla', 'tomaat']),
    new Broodje('Malibu', ['Kalkoenham', 'wortels', 'ananas', 'cocktail', 'sla', 'tomaat']),
    new Broodje('Mambo', ['Tonijnsalade', 'perzik']),
    new Broodje('Maritiem', ['Noordzeesalade', 'ansjovis', 'cresson', 'tomaat']),
    new Broodje('Martino anders', ['Martino', 'ansjovis', 'augurken', 'boontjes', 'verse ui', 'mosterd', 'curryketchup', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Mexicaan', ['préparé', 'verse ui', 'pikante saus', 'sla']),
    new Broodje('Mik-Mak', ['Kaas', 'ham', 'salami', 'ei', 'cocktail', 'sla', 'tomaat']),
    new Broodje('Mix', ['Kaas', 'ham', 'préparé', 'augurk', 'cocktail', 'sla', 'tomaat']),
    new Broodje('Mona Lisa', ['Seranoham', 'parmezaanschilfers', 'sla', 'tomaat', 'vinaigrette']),
    new Broodje('Nufus', ['Fetakaas', 'paprika', 'oreganokruiden', 'olijfolie', 'sla']),
    new Broodje('Nutella', ['Nutella choco']),
    new Broodje('Oriental', ['Varkensgebraad', 'ananas', 'verse ui', 'pikante saus', 'sla']),
    new Broodje('Panino', ['Eiersalade', 'verse ui', 'komkommer', 'cresson', 'tomaat']),
    new Broodje('Parma meloen', ['Parmaham', 'sla', 'tomaat', 'meloen', 'dressing']),
    new Broodje('Philly', ['Philadelphia', 'komkommer', 'radijs', 'krulsulade']),
    new Broodje('Pic-nic', ['Varkensgebraad', 'augurk', 'cocktail', 'cresson', 'tomaat']),
    new Broodje('Porky', ['Varkensgebraad', 'cocktail', 'ananas', 'perzik']),
    new Broodje('Poulet light', ['Gebakken kip', 'light mayo', 'wortel', 'sla', 'tomaat', 'ei', 'komkommer']),
    new Broodje('Portugees', ['Kip pikant', 'ei', 'sla', 'tomaat']),
    new Broodje('Pronto', ['Mozarella', 'basilicum', 'tomaat']),
    new Broodje('Qattro', ['Ardeense ham', 'kaas', 'préparé', 'komkommer', 'ei', 'cocktail', 'sla', 'tomaat']),
    new Broodje('Riviera', ['Kaas', 'verse ui', 'wortels', 'ansjovis', 'mayonaise', 'cresson']),
    new Broodje('Roze ballet', ['Gerookte zalm', 'verse ui', 'peterselie', 'cresson', 'mayonaise']),
    new Broodje('Siciliaan', ['Rosbief', 'tartaar', 'peper & zout', 'ei', 'krulsia', 'tomaat']),
    new Broodje('Snackfood', ['Kaas', 'ham', 'salami', 'verse ui', 'ei', 'mayonaise', 'sla', 'tomaat']),
    new Broodje('Spanjaard', ['Tonijn', 'augurk', 'ansjovis', 'sla', 'tomaat']),
    new Broodje('Superman', ['Eiersalade', 'kaas', 'hesp', 'sla', 'tomaat', 'augurken']),
    new Broodje('Talé', ['Garnaalsalade', 'verse ui', 'tabasco', 'sla', 'tomaat']),
    new Broodje('Texas', ['Américain', 'ajuin', 'augurken', 'sla']),
    new Broodje('Tonijntino', ['Tonijn', 'ansjovis', 'ei', 'sla', 'tomaat']),
    new Broodje('Toscane', ['Parmaham', 'mozarella', 'sla', 'tomaat', 'pesto', 'zongedroogde tomaten']),
    new Broodje('Trampoline', ['préparé', 'zilveruitjes', 'tomatenketchup', 'sla']),
    new Broodje('Tummy', ['Kippenwit', 'maiskorrels', 'cocktail', 'sla']),
    new Broodje('Turk', ['Pittasalade', 'verse ui', 'sla', 'tomaat']),
    new Broodje('Variee', ['Ham', 'ansjovis', 'augurk', 'ei', 'cocktail', 'sla', 'tomaat']),
    new Broodje('Versace', ['Italiaanse ham', 'camembert', 'tomaat', 'sla']),
    new Broodje('Verwenbroodje', ['Langoustinesalade', 'mesclun', 'ei', 'perzik']),
    new Broodje('Visserken', ['Noordzeesalade', 'verse ui', 'ei', 'tomaat']),
    new Broodje('Vuur en vlam', ['Tonijn pikant', 'pikante saus', 'sla', 'tomaat']),
    new Broodje('Zoet geitje', ['Geitenkaas', 'dadels', 'noten', 'honing'])
  ];




  constructor() {
    this.broodjesLijst$ = new BehaviorSubject(this.broodjeslijst);
    const listOfLists: string[][] = this.broodjeslijst.map(broodje => broodje.ingredienten);
    const allIngredients = [].concat.apply([], listOfLists);

    from(allIngredients)
      .pipe(map((ingr: string) => ingr.toLowerCase()), distinct())
      .subscribe((e: string) => this.allingredients.push(e));
  }

  getAllIngredients(): Array<string> {


    return this.allingredients;
  }

  getAllBroodjes(): Array<Broodje> {
    return this.broodjeslijst;
  }


  getBroodjes(ingredient: string): Array<Broodje> {
    return this.broodjeslijst
      .filter(broodje => broodje.ingredienten.find(e => {
        return e.toLowerCase().includes(ingredient.toLowerCase());
      }));
  }

  getMatchingIngredients(ingredientPart: string): Array<string> {
    return this.getAllIngredients()
      .filter(uniqueIngredient => uniqueIngredient.toLowerCase().includes(ingredientPart));
  }

}
