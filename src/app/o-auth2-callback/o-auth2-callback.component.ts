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
      params => {
        if (params.code) { //se existir o parâmetro 'code'
          console.log('Access code:');
          console.log(params.code);
          //salva o access code para uso posterior
          this.pinterest.setAccessCode(params.code);
          //retorna a página inicial
          //this.router.navigate(['/']);
        }
        else {
          console.error('ERRO DE ACCESS CODE');
          //deu erro no login; retornamos a página de login
          //this.router.navigate(['/login']);
        }
      }
    )
  }

}
