import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class CategoriaService{
  constructor(private httpClient: HttpClient) {}

  private readonly baseURL = environment['endPoint'];

}
