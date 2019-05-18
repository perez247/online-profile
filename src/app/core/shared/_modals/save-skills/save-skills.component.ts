import { AppSkills } from './../../model/app-skills';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SkillService } from '../../_services/skill.service';
import { ToasterService } from '../../_services/toaster.service';

@Component({
  selector: 'app-save-skills',
  templateUrl: './save-skills.component.html',
  styleUrls: ['./save-skills.component.css']
})
export class SaveSkillsComponent implements OnInit {
  skill: AppSkills;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private daiolgRef: MatDialogRef<SaveSkillsComponent>,
    private skillService: SkillService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.setSentSkill();
  }

  setSentSkill() {

    if (this.data.skill) {
      this.skill = this.data.skill as AppSkills;
    } else {
      this.skill = {} as AppSkills;
    }

  }

  save()  {
    this.skillService.save(this.skill)
    .then(r => this.daiolgRef.close());
  }

  deleteSkill(skill: AppSkills) {
    this.skillService.delete(skill);
    this.daiolgRef.close();
  }

}
