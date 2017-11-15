import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './pages/index/index.component';
import {FoodsearchComponent} from './pages/foodsearch/foodsearch.component';
import {RecipesearchComponent} from './pages/recipesearch/recipesearch.component';
import {LoginComponent} from './pages/login/login.component';
import {ContactComponent} from './pages/contact/contact.component';



const routes: Routes = [
  {   path: '', component: IndexComponent},
  {   path: 'foodsearch', component: FoodsearchComponent},
  {   path: 'recipesearch', component: RecipesearchComponent},
  {   path: 'login', component: LoginComponent},
  {   path: 'contact', component: ContactComponent},
  {   path: '**', component: IndexComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
