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
  private accessCode: string = '';
  private accessToken : string = '';

    initLogin() 
  {
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
        //this.router.navigate(['/']);

      },
      error => {

        console.error('ERRO DE TOKEN');
        console.error(error);
        //
      }
    );
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


