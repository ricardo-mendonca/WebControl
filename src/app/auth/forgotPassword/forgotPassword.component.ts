import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgotPassword.service';


@Component({
  selector: 'app-login',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss'],
})
export class forgotPasswordComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private forgotPasswordService: ForgotPasswordService
  ) {}

  forgotPasswordForm: FormGroup;

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  get dadosForm() {
    return this.forgotPasswordForm.controls;
  }

  forgotUser() {
    this.forgotPasswordService
    .ResetPassword(this.dadosForm['email'].value )
    .subscribe(
      (ret) => {

        var resposta = ret;
        resposta = resposta["message"];
        alert(resposta);
        //console.log(objetoResposta);

        this.router.navigate(['/login']);
      },
      (error) => {
        var resposta = error;
        //console.log(resposta.error.message);
        resposta = resposta.error.message;
        alert(resposta);
      }
    );
  }
}
