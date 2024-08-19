import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { AuthserviceService } from '../../services/auth/auth.service';
import { TokenStoreService } from '../../services/token-store.service';

@Component({
  selector: 'app-ui-user',
  templateUrl: './ui-user.component.html',
  styleUrl: './ui-user.component.css'
})
export class UiUserComponent {
  name: string='';
  is_login: boolean=false;

  constructor(private _route: ActivatedRoute, private _router:Router,
    private _login: LoginService, private _token: TokenStoreService,
    private _auth: AuthserviceService){}

  ngOnInit(): void {
    var namefull='';
    this._route.queryParams.subscribe(params => {
      namefull = params['name'];
    });
    this.name = namefull;
    this._auth.setName(this.name);
    console.log("Token ne:",this._token.getToken());
    if(this._token.getToken()){
      this.is_login=true;
    }
  }

  upPost(){
    if(this.is_login==false)
      this._router.navigate(['/']); 
  }

  logOut(): void {
    this._auth.Call_API_Logout();
    this._router.navigate(['/']); 
  }
}
