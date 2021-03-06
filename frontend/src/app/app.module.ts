import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FoodsearchComponent } from './pages/foodsearch/foodsearch.component';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FoodcontentComponent } from './components/foodcontent/foodcontent.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FoodsearchService } from './services/foodsearch.service';
import { RecipeService } from './services/recipe.service';
import { UserService } from './services/user.service';
import { HttpModule, JsonpModule } from '@angular/http';
import {AuthguardGuard} from './authguard.guard';
import { DiaryComponent } from './pages/diary/diary.component';
import { MyrecipesComponent } from './pages/myrecipes/myrecipes.component';
import { ErrorComponent } from './pages/error/error.component';
import { RecipecreationComponent } from './pages/recipecreation/recipecreation.component';

@NgModule({
  declarations: [
    ContactComponent,
    AppComponent,
    HeaderComponent,
    ContentComponent,
    IndexComponent,
    LoginComponent,
    ContactformComponent,
    RegisterformComponent,
    LoginformComponent,
    FoodsearchComponent,
    RecipesearchComponent,
    ProfileComponent,
    FoodcontentComponent,
    FooterComponent,
    SidebarComponent,
    DiaryComponent,
    MyrecipesComponent,
    ErrorComponent,
    RecipecreationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [
    FoodsearchService, 
    RecipeService,
    UserService,
    AuthguardGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
