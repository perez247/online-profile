import { AppSkills } from './../../core/shared/model/app-skills';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/core/shared/_services/skill.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-public-skills',
  templateUrl: './public-skills.component.html',
  styleUrls: ['./public-skills.component.css']
})
export class PublicSkillsComponent implements OnInit {

  skills: AppSkills[] = [];
  backEnd: AppSkills[] = [];
  frontEnd: AppSkills[] = [];
  others: AppSkills[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getskills();
  }

  getskills() {
    this.skillService.getAll().subscribe((data: any[]) => {
      this.skills.length = 0;
      data.forEach(v => { this.skills.push(new AppSkills(v)); });
      // this.skills = _.orderBy(this.skills, ['years'], ['desc']);

      this.backEnd = this.skills.filter(v => v.type === 'backEnd');
      this.frontEnd = this.skills.filter(v => v.type === 'frontEnd');
      this.others = this.skills.filter(v => v.type === 'others');
    });
  }


}
