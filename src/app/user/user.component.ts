import { Component, OnInit } from '@angular/core';
import { PinterestService } from '../services/pinterest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private pinterest: PinterestService
  ) { }

  user: any;
  avatarImage: string = '';
  avatarAlt: string = '';

  ngOnInit() {
    //Busca os dados do usuário no Service
    this.user = this.pinterest.getUser().data;

    if (this.user.image['60x60']){
      this.avatarImage = this.user.image['60x60'].url;
      this.avatarAlt = `Foto de ${this.user.first_name} ${this.user.last_name}`
    }
  }

  doLogoff() {
    this.pinterest.logOff();
  }
}
