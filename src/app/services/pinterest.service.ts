import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinterestService {

  constructor(
    private http: HttpClient,
  ) { }

  private env = environment;

  private accescode: String = '';

  initLogin(){
    const params = new HttpParams()
    .set('response_type','code')
    .set('client_id',this.env.clientId)
    .set('scope','read_public,write_public')
    .set('redirect_uri',this.env.redirectUri); 

    window.location.href = this.env.authUrl + '?' + params.toString();
  }

  setAcessCode(accessCode: string){
    this.accescode = this.accescode;
  }
}
//Oi
