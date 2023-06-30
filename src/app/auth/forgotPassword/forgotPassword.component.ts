import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss'],
})
export class forgotPasswordComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  forgotPasswordForm: FormGroup;

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
      }
    );
  }

  get dadosForm() {
    return this.forgotPasswordForm.controls;
  }

  loginUser() {

  }
}
