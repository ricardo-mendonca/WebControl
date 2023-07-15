import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
  HTTPStatus,
  LoaderInterceptor,
} from './interceptor/loader.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuard } from './pages/guards/auth-guard.service';

import { forgotPasswordComponent } from './auth/forgotPassword/forgotPassword.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';

const RxJS = [LoaderInterceptor, HTTPStatus];
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
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    NgxSpinnerModule,
  ],
  providers: [
    AuthGuard,
    RxJS,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
