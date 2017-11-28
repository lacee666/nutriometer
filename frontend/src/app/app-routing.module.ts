import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import {IndexComponent} from './pages/index/index.component';
import {FoodsearchComponent} from './pages/foodsearch/foodsearch.component';
import {RecipesearchComponent} from './pages/recipesearch/recipesearch.component';
import {LoginComponent} from './pages/login/login.component';
import {ContactComponent} from './pages/contact/contact.component';
import {MyrecipesComponent} from './pages/myrecipes/myrecipes.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DiaryComponent} from './pages/diary/diary.component';
import {ErrorComponent } from './pages/error/error.component';


//AUTH GUARD
import {AuthguardGuard} from './authguard.guard';


const routes: Routes = [
  {   path: '', component: IndexComponent},
  {   path: 'foodsearch', component: FoodsearchComponent},
  {   path: 'recipesearch', component: RecipesearchComponent},
  {   path: 'login', component: LoginComponent},
  {   path: 'contact', component: ContactComponent},
  {   path: 'profile', canActivate: [AuthguardGuard], component: ProfileComponent},
  {   path: 'diary', canActivate: [AuthguardGuard], component: DiaryComponent},
  {   path: 'myrecipes', canActivate: [AuthguardGuard], component: MyrecipesComponent},
  {   path: 'error', component: ErrorComponent},
  {   path: '**', component: IndexComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [AuthguardGuard],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
