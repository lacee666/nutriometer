import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {SignComponent} from './sign/sign.component';



const routes: Routes = [
  {   path: '', component: IndexComponent},
  {   path: 'foodsearch', component: HeaderComponent},
  {   path: 'recipesearch', component: HeaderComponent},
  {   path: 'sign', component: SignComponent},
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
