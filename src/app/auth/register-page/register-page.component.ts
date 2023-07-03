import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private registerService: registerService
    ) {}

  CadastroForm: FormGroup;

  ngOnInit(): void {
    this.CadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      telefone: ['', [Validators.required]],
    });
  }

  get dadosForm() {
    return this.CadastroForm.controls;
  }


  cadastrarUser(){
    this.registerService
    .CreateUsuario(this.dadosForm['nome'].value, this.dadosForm['email'].value, this.dadosForm['senha'].value , this.dadosForm['telefone'].value)
    .subscribe(
      (ret) => {
        console.log(ret);
        var resposta = ret;
        var objetoResposta = JSON.stringify(resposta);
        resposta = resposta["message"];
        alert(resposta);
        //console.log(objetoResposta);

        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
        var resposta = err.error;
        var objetoResposta = JSON.stringify(resposta);
        resposta = resposta["message"];
        alert(resposta);
      }
    );
  }



  formatarTelefone(event) {
    let v = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const tamanhoMaximo = 11;
    if (v.length > tamanhoMaximo) {
      v = v.slice(0, tamanhoMaximo); // Limita o tamanho máximo do número de celular
    }
    if (v.length > 2) {
      v = `(${v.substring(0, 2)}) ${v.substring(2)}`; // Insere os parênteses no código de área
    }
    if (v.length > 8) {
      v = `${v.substring(0, 9)}${v.substring(9)}`; // Insere o hífen entre os dígitos do número de celular
    }
    event.target.value = v;
  }

}
