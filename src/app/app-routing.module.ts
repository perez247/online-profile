import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './core/modules/contacts/contacts.component';
import { EducationComponent } from './core/modules/education/education.component';
import { ExperienceComponent } from './core/modules/experience/experience.component';
import { PortfolioComponent } from './core/modules/portfolio/portfolio.component';
import { ProfileComponent } from './core/modules/profile/profile.component';
import { SkillsComponent } from './core/modules/skills/skills.component';
import { PublicAuthComponent } from './public/public-auth/public-auth.component';

const routes: Routes = [
  {path: 'home', component: ProfileComponent},
  {path: 'about-me', component: ProfileComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'auth', component: PublicAuthComponent},
  {path: '**', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
