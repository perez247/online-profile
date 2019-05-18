import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @select((s: IAppState) => s.user.user) AppUser: firebase.User;
  constructor() { }

  ngOnInit() {
  }

}
