import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindRoommateComponent } from './components/find-roommate/find-roommate.component';
import { EditProfileContentComponent } from './components/edit-profile-content/edit-profile-content.component';
import { RegisterOwnerContentComponent } from './components/register-owner-content/register-owner-content.component';
import { ChangePasswordContentComponent } from './components/change-password-content/change-password-content.component';
import { NewsListContentComponent } from './components/news-list-content/news-list-content.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RentRoomComponent } from './components/rent-room/rent-room.component';
import { RoommateSearchComponent } from './components/roommate-search/roommate-search.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { RoommateSearchDetailComponent } from './components/roommate-search-detail/roommate-search-detail.component';
import { NewsComponent } from './components/news/news.component';
import { AuthGuardService } from './services/authguard/authguard.service';
import { ApproveLandlordApplicationComponent } from './components/approve-landlord-application/approve-landlord-application/approve-landlord-application.component';
import { EditUserComponent } from './components/edit-user/edit-user/edit-user.component';
import { PostManagementComponent } from './components/post-management/post-management.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UiAdminComponent } from './components/ui-admin/ui-admin.component';
import { RegisterComponent } from './components/register/register.component';
import { UiUserComponent } from './components/ui-user/ui-user.component';

const routes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'uiuser', component: UiUserComponent, canActivate:[AuthGuardService], children:[
    { path: 'rent-room', component: RentRoomComponent},
    { path: 'roommate-search', component: RoommateSearchComponent},
    { path: 'detailrentroom/:id', component: RoomDetailComponent },
    { path: 'detailroommate/:id', component: RoommateSearchDetailComponent },
    { path: 'news', component: NewsComponent},
    { path: 'homepage', component: HomepageComponent},
    { path: 'edituser', component: EditUserComponent, children:[
      { path: 'post-for-roommate', component: FindRoommateComponent },
      { path: 'edit-profile', component: EditProfileContentComponent},
      { path: 'change-password', component: ChangePasswordContentComponent },
      { path: 'news-list', component: NewsListContentComponent },
      { path: 'register-owner', component: RegisterOwnerContentComponent },
    ]}  
  ]},
  { path: 'uiadmin', component: UiAdminComponent, canActivate:[AuthGuardService], children:[
    { path: 'user-list', component: UserListComponent },
    { path: 'post-manage', component: PostManagementComponent},
    { path: 'approve-application', component: ApproveLandlordApplicationComponent},
    { path: 'homepage', component: HomepageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
