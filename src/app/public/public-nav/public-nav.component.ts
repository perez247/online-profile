import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

import { AuthService } from './../../core/shared/_services/auth.service';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/core/state-management/root/root-store';
import { UIActionConstant } from 'src/app/core/state-management/ui/ui-action-constants';

@Component({
  selector: 'app-public-nav',
  templateUrl: './public-nav.component.html',
  styleUrls: ['./public-nav.component.css']
})
export class PublicNavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<null>();

  @select((s: IAppState) => s.user.user) AppUser: firebase.User;

  navbarSelected = false;
  subMenu = false;
  currentUrl: string;
  navMenu: any[];

  loader = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private redux: NgRedux<IAppState>,
    ) { }

  ngOnInit() {
    this.observeUrlChange();
    this.checkUrls();
    this.checkLoader();
  }

  toggleNavbar() {
    this.navbarSelected = !this.navbarSelected;
  }

  logout() {
    this.authService.logout(this.currentUrl);
  }

  observeUrlChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  close() {
    this.checkUrls();
    this.closeSidenav.emit();
  }

  checkLoader() {
    this.redux.select(i => i.ui.rightLoader).subscribe(r => {
      this.loader = r;
    });
  }

  justClose() {
    // if (this.loader) {
      this.redux.dispatch( {type: UIActionConstant.LOADING_RIGHT_CONTENT, loading: true} );

      setTimeout(
        () => { this.redux.dispatch( {type: UIActionConstant.LOADING_RIGHT_CONTENT, loading: false} ); }
        , 300
      );

    // }
    this.closeSidenav.emit();
  }

  checkUrls() {
    this.router.events
    .pipe(
      filter(event => event instanceof RoutesRecognized),
      pairwise()
    )
    .subscribe((e: any) => {
        if (e[0].urlAfterRedirects !== e[1].urlAfterRedirects && e[1].urlAfterRedirects !== '/auth') {
          this.redux.dispatch( {type: UIActionConstant.LOADING_RIGHT_CONTENT, loading: true} );
        }
    });
  }
}
