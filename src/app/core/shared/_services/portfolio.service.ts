import { AppFireBase } from './../common/app-firebase';
import { Injectable } from '@angular/core';
import { AppPortfolio } from '../model/app-portfolio';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatBottomSheet } from '@angular/material';
import { ToasterService } from './toaster.service';
import { ConfirmDeleteComponent } from '../_bottom-sheets/confirm-delete/confirm-delete.component';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends AppFireBase {
  url = 'public/portfolio/';

  constructor(ngDb: AngularFireDatabase, private bottomSheet: MatBottomSheet, private toaster: ToasterService, redux: NgRedux<IAppState>) {
    super(ngDb, 'public/portfolio/', redux);
   }

   save(obj: AppPortfolio) {

    return this.saveData(obj, obj.key).then(r => {
      this.toaster.success('Portfolio Saved');
      return Promise.resolve(true);

    }).catch(e => this.toaster.error('Failed to save Portfolio'));
   }

   delete(obj: AppPortfolio) {
    this.bottomSheet.open(ConfirmDeleteComponent, {
      data: {
        name: obj.projectName,
        path: this.url,
        key: obj.key
      }
    });
  }
}
