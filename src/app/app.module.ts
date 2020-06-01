import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { CarouselModule, MDBModalService} from 'angular-bootstrap-md';
// MDB Angular Free
import {ModalModule, CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSlideShowComponent } from './image-slide-show/image-slide-show.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeLoaderComponent } from './home-loader/home-loader.component';
import { PartnersComponent } from './partners/partners.component';
import { TemplatesComponent } from './templates/templates.component';
import { ArchiveComponent } from './archive/archive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalComponent } from './shared/modal/modal.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http' ;
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProgressComponent } from './progress/progress.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementComponent } from './announcements/announcement/announcement.component';
import { AnnouncementFormComponent } from './announcements/announcement-form/announcement-form.component';
import { LoginService } from './services/login.service';
import { AnnouncementDetailsComponent } from './announcements/announcement-details/announcement-details.component';
import { UploadBoardComponent } from './upload-board/upload-board.component';
import { DocListComponent } from './upload-board/doc-list/doc-list.component';
import { UploadComponent } from './upload-board/upload/upload.component';
import { SearchComponent } from './archive/search/search.component';
import { StudentsService } from '../services/students.service';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    SupervisorsComponent,
    ImageSlideShowComponent,
    LogInComponent,
    HomeLoaderComponent,
    PartnersComponent,
    TemplatesComponent,
    ArchiveComponent,
    ModalComponent,
    SignupComponent,
    ProgressComponent,
    AnnouncementsComponent,
    AnnouncementComponent,
    AnnouncementFormComponent,
    AnnouncementDetailsComponent,
    UploadBoardComponent,
    DocListComponent,
    UploadComponent,
    SearchComponent,
    CarComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonsModule, InputsModule, IconsModule, CardsModule, CheckboxModule,
    WavesModule, FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule, BrowserAnimationsModule,

  ],
  providers: [MDBModalService,
    LoginService,
    StudentsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class AppModule { }
