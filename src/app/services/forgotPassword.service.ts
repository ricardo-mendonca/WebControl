import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ForgotPasswordService{
  constructor(private httpClient: HttpClient) {
  }

  private readonly baseUrl = environment["endpoint"];

  ResetPassword(email: string){

      return this.httpClient.post(`${this.baseUrl}/ResetPassword`, { email: email });
  }
}



