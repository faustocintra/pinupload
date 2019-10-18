import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PinterestService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private env = environment;
  /* accessCode e accessToken podem ser string ou null*/
  private accessCode: string|null = null;
  private accessToken : string|null = null;
  private loggedInUser: any = null;

    initLogin() 
  {  //só inicia o login caso não existam o access code e o access token

    if(this.accessCode && this.accessToken){

      this.router.navigate(['/']); // volta para pagina inicial
      return;
    }
    const params = new HttpParams()
    .set('response_type', 'code')
    .set('client_id', this.env.clientId)
    .set('scope', 'read_public,write_public')
    .set('redirect_uri', this.env.redirectUri);

    //redireciona para o site do pinterest para fazer login

    window.location.href = this.env.authUrl + '?' + params.toString();

    // asdf

  }

  setAccessCode(accessCode: string) {

    this.accessCode = accessCode;
    this.getAccessToken();
  }  
    getLoggedInUser() {
        //somenete 
      if(!this.accessToken){
        this.logOff(); // log off forçado
        return;
      }

      const endPoint = 'me/';
      const params = new HttpParams()
      .set('access_token', this.accessToken)
      .set('fields', 'id,username,first_name,last_name,bio,image');

      this.http.get(this.env.apiUri + endPoint, {params: params}).subscribe (
        user=> {
          this.loggedInUser = user;
          console.log(user);
          this.router.navigate(['/user']);

        },

        error => {
          console.error(error);
        }
      );
    }

    getUser(){

      return this.loggedInUser;
    }

  
  
  private getAccessToken() {
    const params = new HttpParams()
    .set('grant_type', 'authorization_code' )
    .set('client_id', this.env.clientId)
    .set ('client_secret', this.env.clientSecret)
    .set('code', this.accessCode );
   

    this.http.post(this.env.tokenUri, null, {params: params}).subscribe(
      res=> {
        console.log('--TOKEN--');
        this.accessToken = res['access_token'];
        console.log(this.accessToken);
        this.getLoggedInUser();
        //this.router.navigate(['/']);

      },
      error => {

        console.error('ERRO DE TOKEN');
        console.error(error);
        //
      }
    );
  }

  logOff(){

    this.accessCode = null;
    this.accessToken = null;
    this.loggedInUser = null;
    this.router.navigate(['login']);
  }
}

// OBSERVAÇÃO : ESTE METODO NÃO DEU CERTO
/*async getToken() {

    const params = new HttpParams();

    params.set('response_type', 'code');
    p
  aarams.set('redirect_uri', this.env.redirectUri);
    params.set('client_id', this.env.clientId);
    params.set('scope', 'read_public,write_public');
    params.set('state', 'abc123');

    let token;

    try {
      const promise = await this.http.get(this.env.authUrl, {params: params});
      console.log('TOKEN: ' + token);
      promise.subscribe(
        ret => token = ret
      );
      return token;
    }
    catch(erro) {
      console.error(erro);
    }

  }*/


