
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class MenuService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    menuSelecionado: number;

}
