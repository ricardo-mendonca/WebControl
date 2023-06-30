import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { forgotPasswordComponent } from './auth/forgotPassword/forgotPassword.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    forgotPasswordComponent,
    RegisterPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
