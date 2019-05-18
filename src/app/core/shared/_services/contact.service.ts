import { AppContacts } from './../model/app-contacts';
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
export class ContactService extends AppFireBase {
  url = 'public/contacts/';

  private _socialAccounts = ['facebook', 'instagram', 'twitter', 'github', 'linkedin'];
  //   {name: 'facebook'},
  //   {name: 'instagram'},
  //   {name: 'twitter'},
  //   {name: 'github'},
  //   {name: 'linkedin'}
  // ];

  constructor(ngDb: AngularFireDatabase, private bottomSheet: MatBottomSheet, private toaster: ToasterService, redux: NgRedux<IAppState>) {
    super(ngDb, 'public/contacts/', redux);
   }

   save(obj: AppContacts) {
    return this.updateAll(obj).then(r => {
      this.toaster.success('Contacts Updated');
      return Promise.resolve(true);

    }).catch(e => this.toaster.error('Failed to update contacts'));
   }

   get socials() {
     return this._socialAccounts;
   }
}
