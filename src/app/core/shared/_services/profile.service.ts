import { AppFireBase } from './../common/app-firebase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase, redux: NgRedux<IAppState>, private toaster: ToasterService) {
    super(ngDb, 'public/profile/', redux);
   }

  save(profile: any) {
    return this.updateAll(profile)
    .then(f => this.toaster.success('Profile saved'))
    .catch(e => this.toaster.error('Failed to update profile'));
  }
}
