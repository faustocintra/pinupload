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

  ngOnInit() {
    this.route.queryParams.subscribe(
      params =>{
        if(params.code){//Se existir o parâmetro chamado 'code'
          console.log('Acess code: ');
          console.log(params.code);
          //Salva o acess code para uso posterior
          this.pinterest.setAccessCode(params.code);
          //Retorna à página inicial
          //this.route.nagigate(['/']);
        }
        else{
          console.error('ERRO DE ACESS CODE');
          //Deu erro no login;
          //Retornamos à página de login
          //this.router.naginate(['/login']);
        }
      }
    );
  }
}
