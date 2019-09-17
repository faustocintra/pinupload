import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PinterestService } from '../services/pinterest.service';

@Component({
  selector: 'app-o-outh2-callback',
  templateUrl: './o-outh2-callback.component.html',
  styleUrls: ['./o-outh2-callback.component.scss']
})
export class OOuth2CallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pinterest: PinterestService
  ) { }

  async ngOnInit() {
    try {
      let queryParams = await this.route.queryParams.toPromise();
      if (queryParams['code']) { // se existir o parâmetro chamado 'code'
        console.log('*** ACESS CODE: ' + queryParams['code']);
        // Salva o acess code para uso posterior
        this.pinterest.setAccessCode(queryParams['code']);
        // Retorna a página inicial
        // this.router.navigate(['/home']);
      }
      else { // não tem parâmetro 'code', provavelmente cancelou o login
        // retorna à pagina de login
        this.router.navigate(['/login']);
      }
    }
    catch (error) {
      console.error(error);
      // Deu erro no login; retornamos a página de login.
      // this.router.navigate([''/login]);
    }
  }
}