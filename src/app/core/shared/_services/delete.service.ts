import { AppFireBase } from './../common/app-firebase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Injectable({
  providedIn: 'root'
})
export class DeleteService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase, redux: NgRedux<IAppState>) {
    super(ngDb, '', redux);
   }

  delete(path: string, key: string) {
    return this.deleteData(path, key);
  }
}
