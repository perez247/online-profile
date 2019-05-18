import { ConfirmDeleteComponent } from './../_bottom-sheets/confirm-delete/confirm-delete.component';
import { AppExperience } from 'src/app/core/shared/model/app-experience';
import { Injectable } from '@angular/core';
import { AppFireBase } from '../common/app-firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatBottomSheet } from '@angular/material';
import { ToasterService } from './toaster.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends AppFireBase {
  url = 'public/work-experience/';

  constructor(ngDb: AngularFireDatabase, private bottomSheet: MatBottomSheet, private toaster: ToasterService, redux: NgRedux<IAppState>) {
    super(ngDb, 'public/work-experience/', redux);
   }

   save(exp: AppExperience) {
    return this.saveData(exp, exp.key).then(r => {
      this.toaster.success('Experience Saved');
      return Promise.resolve(true);

    }).catch(e => this.toaster.error('Failed to save Experience'));
   }

   delete(exp: AppExperience) {
    this.bottomSheet.open(ConfirmDeleteComponent, {
      data: {
        name: exp.companyName,
        path: this.url,
        key: exp.key
      }
    });
  }

}
