import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { OAuthCallbackComponent } from './o-auth-callback/o-auth-callback.component';
import { HomeComponent } from './home/home.component';
import { OAuth2CallbackComponent } from './o-auth2-callback/o-auth2-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OAuthCallbackComponent,
    HomeComponent,
    OAuth2CallbackComponent
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
