import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  is_menu_expanded = false;
  name_page='';
  name='';
  click_page=false;

  constructor(private _route: ActivatedRoute, private _auth: AuthserviceService) {}

  ngOnInit(): void {
    // var namefull='';
    // this._route.queryParams.subscribe(params => {
    //   namefull = params['name'];
    // });
    // this.name = namefull;
    this.name=this._auth.getName();
  }
  
  toggleMenu() {
    this.is_menu_expanded = !this.is_menu_expanded;
  }

  getLinkContent(event: Event) {
    const target = event.target as HTMLElement;
    this.name_page = target.textContent?.trim() || '';
    this.click_page=true;
  }
}
