import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';
import { UserActionConstant } from '../../state-management/user-state/user-action-constants';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  returnUrl = '';

  constructor(
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private redux: NgRedux<IAppState>,
    private toaster: ToasterService
  ) {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';

  }

  authUser() {
    this.auth.authState.subscribe(user => {
      this.redux.dispatch({ type: UserActionConstant.SET_AUTH_USER, user });
    });
  }


  login(value: {email: string, password: string}) {

    this.auth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(e => {
        // this.logTime();
        this.router.navigate([this.returnUrl]);
        this.authUser();
        return true;
      }).catch(e => {
        this.toaster.error('Invalid username/password');
      });
  }

  logout(_url: string) {
    // localStorage.removeItem('timeLoggedIn');
    const url = _url || '';
    this.router.navigate([url]);
    this.auth.auth.signOut();
    this.redux.dispatch({ type: UserActionConstant.SET_AUTH_USER, action: null });
  }
}
