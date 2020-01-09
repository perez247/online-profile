import { FileService } from './_services/file.service';
import { ContactService } from './_services/contact.service';
import { AdminPortfolioComponent } from './../../admin/admin-portfolio/admin-portfolio.component';
import { PortfolioComponent } from './../modules/portfolio/portfolio.component';
import { PortfolioService } from './_services/portfolio.service';
import { ExperienceService } from './_services/experience.service';
import { DeleteService } from './_services/delete.service';
import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminProfileComponent } from 'src/app/admin/admin-profile/admin-profile.component';
import { PublicAuthComponent } from 'src/app/public/public-auth/public-auth.component';
import { PublicContactComponent } from 'src/app/public/public-contact/public-contact.component';
import { PublicEducationComponent } from 'src/app/public/public-education/public-education.component';
import { PublicExperienceComponent } from 'src/app/public/public-experience/public-experience.component';
import { PublicNavComponent } from 'src/app/public/public-nav/public-nav.component';
import { PublicPictureComponent } from 'src/app/public/public-picture/public-picture.component';
import { PublicPortfolioComponent } from 'src/app/public/public-portfolio/public-portfolio.component';
import { PublicProfileComponent } from 'src/app/public/public-profile/public-profile.component';
import { PublicSkillsComponent } from 'src/app/public/public-skills/public-skills.component';
import { environment } from 'src/environments/environment';
import { AdminSkillsComponent } from './../../admin/admin-skills/admin-skills.component';
import { NgMaterials } from './ng-materials/ng-materials.module';
import { AppErrorHandler } from './_interceptors/error.handler';
import { ErrorInterceptorProvider } from './_interceptors/error.interceptor';
import { AuthService } from './_services/auth.service';
import { ProfileService } from './_services/profile.service';
import { SkillService } from './_services/skill.service';
import { ToasterService } from './_services/toaster.service';
import { SaveSkillsComponent } from './_modals/save-skills/save-skills.component';
import { ConfirmDeleteComponent } from './_bottom-sheets/confirm-delete/confirm-delete.component';
import { AdminExperienceComponent } from 'src/app/admin/admin-experience/admin-experience.component';
import { ExperienceComponent } from '../modules/experience/experience.component';
import { SaveExperienceComponent } from './_modals/save-experience/save-experience.component';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MY_FORMATS } from './common/display';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { EducationService } from './_services/education.service';
import { ProfileComponent } from '../modules/profile/profile.component';
import { SkillsComponent } from '../modules/skills/skills.component';
import { AdminEducationComponent } from 'src/app/admin/admin-education/admin-education.component';
import { EducationComponent } from '../modules/education/education.component';
import { SaveEducationComponent } from './_modals/save-education/save-education.component';
import { SavePortfolioComponent } from './_modals/save-portfolio/save-portfolio.component';
import { CustomFormsModule } from 'ng2-validation';
import { HomeGlitchComponent } from './_glitches/home-glitch/home-glitch.component';
import { WrapperHeaderGlitchComponent } from './_glitches/wrapper-header-glitch/wrapper-header-glitch.component';
import { WrapperSidebarGlitchComponent } from './_glitches/wrapper-sidebar-glitch/wrapper-sidebar-glitch.component';
import { AdminContactComponent } from 'src/app/admin/admin-contact/admin-contact.component';
import { ContactsComponent } from '../modules/contacts/contacts.component';
import { SaveContactsSocialComponent } from './_modals/save-contacts-social/save-contacts-social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ScrambleTextComponent } from './_glitches/scramble-text/scramble-text.component';


@NgModule({
  declarations: [
    PublicProfileComponent,
    PublicSkillsComponent,
    PublicExperienceComponent,
    PublicEducationComponent,
    PublicPortfolioComponent,
    PublicContactComponent,
    AdminProfileComponent,
    PublicAuthComponent,
    PublicPictureComponent,
    PublicNavComponent,
    AdminSkillsComponent,
    SaveSkillsComponent,
    SaveExperienceComponent,
    ConfirmDeleteComponent,
    AdminExperienceComponent,
    ExperienceComponent,
    ProfileComponent,
    SkillsComponent,
    AdminEducationComponent,
    EducationComponent,
    SaveEducationComponent,
    SavePortfolioComponent,
    PortfolioComponent,
    AdminPortfolioComponent,
    HomeGlitchComponent,
    WrapperHeaderGlitchComponent,
    WrapperSidebarGlitchComponent,
    AdminContactComponent,
    ContactsComponent,
    SaveContactsSocialComponent,
    ScrambleTextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgMaterials,
    CustomFormsModule,
    BrowserAnimationsModule,
    AngularFireStorageModule
  ],
  providers: [
    SkillService,
    AuthService,
    ProfileService,
    ToasterService,
    DeleteService,
    ExperienceService,
    EducationService,
    PortfolioService,
    ContactService,
    FileService,
    ErrorInterceptorProvider,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  exports : [
    PublicProfileComponent,
    PublicSkillsComponent,
    PublicExperienceComponent,
    PublicEducationComponent,
    PublicPortfolioComponent,
    PublicContactComponent,
    PublicAuthComponent,
    PublicPictureComponent,
    PublicNavComponent,
    AdminProfileComponent,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    NgMaterials,
    AdminSkillsComponent,
    AdminExperienceComponent,
    ExperienceComponent,
    ReactiveFormsModule,
    ProfileComponent,
    SkillsComponent,
    AdminEducationComponent,
    EducationComponent,
    PortfolioComponent,
    AdminPortfolioComponent,
    CustomFormsModule,
    HomeGlitchComponent,
    WrapperHeaderGlitchComponent,
    WrapperSidebarGlitchComponent,
    AdminContactComponent,
    ContactsComponent,
    AngularFireStorageModule,
    ScrambleTextComponent
  ],
  entryComponents: [
    SaveSkillsComponent,
    SaveExperienceComponent,
    SaveEducationComponent,
    SavePortfolioComponent,
    SaveContactsSocialComponent,

    ConfirmDeleteComponent,
  ]
})
export class SharedModule { }
