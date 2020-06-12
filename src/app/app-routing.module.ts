import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { PartnersComponent } from './partners/partners.component';
import { TemplatesComponent } from './templates/templates.component';
import { ArchiveComponent } from './archive/archive.component';
import { SignupComponent } from './signup/signup.component';
import { ProgressComponent } from './progress/progress.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementDetailsComponent } from './announcements/announcement-details/announcement-details.component';
import { UploadBoardComponent } from './upload-board/upload-board.component';
import { HomeLoaderComponent } from './home-loader/home-loader.component';
import { AnnouncementFormComponent } from './announcements/announcement-form/announcement-form.component';
import {GroupsComponent} from "./partners/groups/groups.component";


const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeLoaderComponent,
  children :[
  {path: 'add', component: AnnouncementFormComponent},
  {path: '', component: HomePageComponent},
  { path: 'supervisors', component: SupervisorsComponent},
  { path: 'partners',      component: PartnersComponent, children: [{
    path:'groups', component: GroupsComponent}
    ]},
  { path: 'templates',      component: TemplatesComponent},
  { path: 'archive',      component: ArchiveComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'announcements', component: AnnouncementsComponent,
        children : [{path: 'details' , component: AnnouncementDetailsComponent }]},
  { path: 'upload', component: UploadBoardComponent}
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
