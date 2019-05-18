import { AppEducation } from './../model/app-education';
import { AppFireBase } from './../common/app-firebase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatBottomSheet } from '@angular/material';
import { ToasterService } from './toaster.service';
import { ConfirmDeleteComponent } from '../_bottom-sheets/confirm-delete/confirm-delete.component';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Injectable({
  providedIn: 'root'
})
export class EducationService extends AppFireBase {
  url = 'public/educationList/';

  constructor(ngDb: AngularFireDatabase, private bottomSheet: MatBottomSheet, private toaster: ToasterService, redux: NgRedux<IAppState>) {
    super(ngDb, 'public/educationList/', redux);
   }

   save(obj: AppEducation) {
    return this.saveData(obj, obj.key).then(r => {
      this.toaster.success('Education Saved');
      return Promise.resolve(true);

    }).catch(e => this.toaster.error('Failed to save Education'));
   }

   delete(obj: AppEducation) {
    this.bottomSheet.open(ConfirmDeleteComponent, {
      data: {
        name: obj.courseOfStudy + ', at' + obj.institution,
        path: this.url,
        key: obj.key
      }
    });
  }
}
