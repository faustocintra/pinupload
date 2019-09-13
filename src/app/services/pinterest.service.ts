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

  initLogin() {

    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.env.clientId)
      .set('state', this.env.state)
      .set('scope', 'read_public,write_public')
      .set('redirect_uri', this.env.redirectUri);

    window.location.href = `${this.env.authUrl}?${params.toString()}`;

  }

}
