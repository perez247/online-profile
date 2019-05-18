import { Component, OnInit } from '@angular/core';
import { AppProfile } from 'src/app/core/shared/model/app-profile';
import { ProfileService } from 'src/app/core/shared/_services/profile.service';
import { AppSkills } from 'src/app/core/shared/model/app-skills';
import { SkillService } from 'src/app/core/shared/_services/skill.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  profile: AppProfile;

  skills: AppSkills[] = [];
  backEnd: AppSkills[] = [];
  frontEnd: AppSkills[] = [];
  others: AppSkills[] = [];

  constructor(private profileService: ProfileService, private skillService: SkillService) { }

  ngOnInit() {
    this.getProfile();
    this.getskills();
  }

  getProfile() {
    this.profileService.getEntity().subscribe(data => {
      this.profile = data as AppProfile;
    });
  }

  getskills() {
    this.skillService.getAll().subscribe((data: any[]) => {
      this.skills.length = 0;
      data.forEach(v => { this.skills.push(new AppSkills(v)); });

      this.backEnd = this.skills.filter(v => v.type === 'backEnd').slice(0, 11);
      this.frontEnd = this.skills.filter(v => v.type === 'frontEnd').slice(0, 11);
      this.others = this.skills.filter(v => v.type === 'others').slice(0, 11);
    });
  }

}
