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
    try{
      let queryParams = await this.route.queryParams.toPromise();
      if (queryParams['code']){//se existir code
        console.log('**** ACCESS CODE:'+ queryParams['code']);
        //Salva o access code para uso posterior
        //this.router.navigate(['/home]);
      }else{
        //Não tem parâmetro 'code', provavelmente cancelou o login
        //retorna a página de login
        this.router.navigate(["/login"]);
      }
    }catch(error){
      console.error(error);
    }
  }

}
