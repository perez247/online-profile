import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../state-management/root/root-store';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @select((s: IAppState) => s.user.user) AppUser: firebase.User;
  constructor() { }

  ngOnInit() {
  }

}
