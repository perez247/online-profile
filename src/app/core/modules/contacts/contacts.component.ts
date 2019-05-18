import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../state-management/root/root-store';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @select((s: IAppState) => s.user.user) AppUser: firebase.User;

  constructor() { }

  ngOnInit() {
  }

}
