import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../state-management/root/root-store';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @select((s: IAppState) => s.user.user) AppUser: firebase.User;

  constructor() { }

  ngOnInit() {
  }

}
