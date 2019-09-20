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
  private accessToken: string = '';

  initLogin() {

    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.env.clientId)
      .set('state', this.env.state)
      .set('scope', 'read_public,write_public')
      .set('redirect_uri', this.env.redirectUri);

    window.location.href = `${this.env.authUrl}?${params.toString()}`;

  }

  private async getAccessToken() {
    const params = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('client_id', this.env.clientId)
      .set('client_secret', this.env.clientSecret)
      .set('code', this.accessCode);

      // this.http.post(this.env.authTokenUrl, null, { params }).subscribe(
      //   res => {
      //     this.accessToken = res['accessToken'];
      //     console.log('accessToken', this.accessToken);
      //   },
      //   error => {
      //     console.error('ERRO DE ACCESS TOKEN');
      //   }
      // )

    try {
      const res = await this.http.post(this.env.authTokenUrl, null, { params }).toPromise();
      this.accessToken = res['access_token'];
      console.log('accessToken', this.accessToken);
    } catch (error) {
      console.error('ERRO DE ACCESS TOKEN', error);
    }
  }

  setAccessCode(accessCode: string) {
    this.accessCode = accessCode;
    this.getAccessToken();
  }

}
