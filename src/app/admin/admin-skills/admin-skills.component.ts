import { Component, OnInit } from '@angular/core';
import { AppSkills } from 'src/app/core/shared/model/app-skills';
import { SkillService } from 'src/app/core/shared/_services/skill.service';
import { MatDialog } from '@angular/material';
import { SaveSkillsComponent } from 'src/app/core/shared/_modals/save-skills/save-skills.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-skills',
  templateUrl: './admin-skills.component.html',
  styleUrls: ['./admin-skills.component.css']
})
export class AdminSkillsComponent implements OnInit {

  skills: AppSkills[] = [];
  backEnd: AppSkills[] = [];
  frontEnd: AppSkills[] = [];
  others: AppSkills[] = [];

  constructor(private skillService: SkillService, private dialog: MatDialog) { }

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

  addSkill() {
    this.dialog.open(SaveSkillsComponent, {
      data: {}
    });
  }

  editSkill(skill: AppSkills) {
    this.dialog.open(SaveSkillsComponent, {
      data: {
        skill : skill
      }
    });
  }

}
