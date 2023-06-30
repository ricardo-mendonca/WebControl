import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  constructor(public formBuilder: FormBuilder, private router: Router) {}

  CadastroForm: FormGroup;

  ngOnInit(): void {
    this.CadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
    });
  }

  get dadosForm() {
    return this.CadastroForm.controls;
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
