import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimplesearchComponent} from './simplesearch/simplesearch.component';
import {ExtendedsearchComponent} from './extendedsearch/extendedsearch.component';
import {CreditsComponent} from './credits/credits.component';

const routes: Routes = [
  {path: 'simple', component: SimplesearchComponent},
  {path: 'extended', component: ExtendedsearchComponent},
  {path: '', redirectTo: 'simple', pathMatch: 'full'},
  {path: 'credits', component: CreditsComponent},
  {path: '*', redirectTo: 'simple'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
