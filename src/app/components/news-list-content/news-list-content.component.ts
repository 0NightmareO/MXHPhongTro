import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewListContentService } from '../../services/new-list-content/new-list-content.service';
import { AccountUserService } from '../../services/account-user/account-user.service';
import { Post } from '../../models/post/post';

@Component({
  selector: 'app-news-list-content',
  templateUrl: './news-list-content.component.html',
  styleUrls: ['./news-list-content.component.css']
})
export class NewsListContentComponent implements OnInit {
  data: any; // Biến để lưu trữ dữ liệu nhận từ API
  infs: Post[] = [];
  content: any;

  constructor(
    private dataService: NewListContentService,
    private router: Router,
    private _user: AccountUserService
  ) { }

  ngOnInit(): void {
    // this.dataService.getData().subscribe(response => {
    //   this.data = response;
    //   console.log('Dữ liệu từ API:', this.data); 
    // });
    this._user.Call_API_GetPost().subscribe({
      next: (response: { contents: Post[] }) => {
        console.log("Content: ", response.contents);
        this.content = response.contents;
      },
      error: (error) => {
        console.error("Error fetching posts:", error);
      }
    });
  }

  hideItem(cardId: number) {
    const card = this.data.find((c: any) => c.id === cardId);
    if (card) {
      card.isHidden = true;
      card.status = 'Đã ẩn';
    }
  }

  editItem(cardId: number) {
    this.router.navigate(['/edit-post', cardId]); 
  }

  repostItem(cardId: number) {
    const card = this.data.find((c: any) => c.id === cardId);
    if (card) {
      this.router.navigate(['/new-page']);
    }
  }

  searchText: string = '';

  onSearchClick() {
    console.log('Searching for:', this.searchText);
  }
}
