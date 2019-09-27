import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PinterestService } from '../services/pinterest.service';

@Component({
  selector: 'app-o-auth2-callback',
  templateUrl: './o-auth2-callback.component.html',
  styleUrls: ['./o-auth2-callback.component.scss']
})
export class OAuth2CallbackComponent implements OnInit {

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private pinterest: PinterestService  
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if(params.code) { //Se existit o parametro chamado 'code
          console.log('Access code:');
          console.log(params.code);
          //Salva o access code para uso posterior
          this.pinterest.setAccessCode(params.code);
          //Retorna à pagina inicial
          //this.router.navigate(['/']);
        }
        else{
          console.error('ERRO DE ACCESS CODE');
          //deu erro no login; retornamos à pagina de login
          //this.router.navigate(['/login']);
        }
      }
    )
  }

}
