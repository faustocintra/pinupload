import { Component, OnInit } from '@angular/core';
import {PinterestService} from '../services/pinterest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user : any;
  avatarImage: string = '';
  avatarAlt: string = '';
  constructor(

    private pinterest: PinterestService
  ) { }

  ngOnInit() {
    //Busca os dados do usuarios  no service

    this.user = this.pinterest.getUser().data; 
      // se existir a imagem 60x60
    if(this.user.image['60x60'] ){

      this.avatarImage = this.user.image['60x60'].url;
      this.avatarAlt = `Foto de ${this.user.first_name} ${this.user.last_name}`
    }
  }

  fazerLogoff(){

  }

}
