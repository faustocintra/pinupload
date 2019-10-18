import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { OAuth2CallbackComponent } from './o-auth2-callback/o-auth2-callback.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './ui/header/header.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { BoardsComponent } from './boards/boards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OAuth2CallbackComponent,
    HomeComponent,
    UserComponent,
    HeaderComponent,
    MainMenuComponent,
    BoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
