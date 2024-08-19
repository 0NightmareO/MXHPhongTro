import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-admin',
  templateUrl: './ui-admin.component.html',
  styleUrl: './ui-admin.component.css'
})
export class UiAdminComponent implements OnInit{
  is_menu_expanded = false;
  name_page='';
  click_page=false;
  is_click_home=false;

  constructor() {}

  ngOnInit(): void {
  }
  
  toggleMenu() {
    this.is_menu_expanded = !this.is_menu_expanded;
  }

  getLinkContent(event: Event) {
    const target = event.target as HTMLElement;
    this.name_page = target.textContent?.trim() || '';
    this.click_page=true;
  }

  clickHome(){
    this.is_click_home=true;
  }
}
