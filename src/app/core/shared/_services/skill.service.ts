import { ConfirmDeleteComponent } from './../_bottom-sheets/confirm-delete/confirm-delete.component';
import { AppSkills } from './../model/app-skills';
import { AppFireBase } from './../common/app-firebase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatBottomSheet } from '@angular/material';
import { ToasterService } from './toaster.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends AppFireBase {
  url = 'public/skills/';

  constructor(ngDb: AngularFireDatabase, private bottomSheet: MatBottomSheet, private toaster: ToasterService, redux: NgRedux<IAppState>) {
    super(ngDb, 'public/skills/', redux);
   }

  save(skill: AppSkills) {
    delete skill.chars;
    delete skill.color;

    return this.saveData(skill, skill.key).then(r => {
      this.toaster.success('Skill Saved');
      return Promise.resolve(true);

    }).catch(e => this.toaster.error('Failed to save skill'));
  }

  delete(skill: AppSkills) {
    this.bottomSheet.open(ConfirmDeleteComponent, {
      data: {
        name: skill.skillName,
        path: this.url,
        key: skill.key
      }
    });
  }

}
