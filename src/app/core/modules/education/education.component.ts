import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @select((s: IAppState) => s.user.user) AppUser: firebase.User;
  constructor() { }

  ngOnInit() {
  }

}
