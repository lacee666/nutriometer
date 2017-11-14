import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [
  { 
    path: '', component: IndexComponent
  },
  {
    path: 'anyad', component: HeaderComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
