import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    var namefull='';
    this._route.queryParams.subscribe(params => {
      namefull = params['name'];
    });
    this.name = namefull;
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
