import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignComponent } from './components/sign/sign.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LoginformComponent } from './components/loginform/loginform.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    IndexComponent,
    ContactComponent,
    SignComponent,
    RegisterformComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
