import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PinterestService } from '../services/pinterest.service';

@Component({
  selector: 'app-o-auth2-callback',
  templateUrl: './o-auth2-callback.component.html',
  styleUrls: ['./o-auth2-callback.component.scss']
})
export class OAuth2CallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pinterest: PinterestService
  ) { }

  async ngOnInit() {
    try {
      let queryParams = await this.route.queryParams;
      if (queryParams['code']) {//se existir o parâmetro 'code'
        console.log('*** ACCESS CODE: ' + queryParams['code']);
        //salva o access code para uso posterior
        this.pinterest.setAccessCode(queryParams['code']);
        //retorna a página inicial
        // this.router.navigate(['/home']);
      }
      else {//não tem parâmetro 'code', provavelmente cancelar o login
        //retorna para a página de login
        this.router.navigate(['/login']);
      }
    }
    catch (error) {
      console.error(error);
      //deu erro no login; retornamos a página de login
      this.router.navigate(['/login']);
    }
  }



}
