import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AccountService {

  WebApiUrl = 'http://10.10.52.64:8080/ChatWebAPI';

  constructor(private httpClinet: HttpClient) { }

  Login(Name: string, Pwd: string){
    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      Accept: '*'
    });

    return this.httpClinet.post(this.WebApiUrl + '/Login',
      {
        ID: Name,
        PassWord: Pwd
      }, { headers });
  }

  Register(Name: string, Pwd: string){
    const headers = new HttpHeaders({
      'content-Type': 'application/json',
      Accept: '*'
    });

    return this.httpClinet.post(this.WebApiUrl + '/Register',
      {
        ID: Name,
        PassWord: Pwd
      }, { headers });
  }
}
