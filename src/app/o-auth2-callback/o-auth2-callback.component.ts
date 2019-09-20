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
    private service: PinterestService,
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if (params.code) {
          console.log('Access code', params.code);
          this.service.setAccessCode(params.code);
        } else {
          console.error('ERRO DE ACCESS CODE');
        }
      }
    );
  }

}
