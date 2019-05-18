import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/_services/auth.service';
import { select } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @select((s: IAppState) => s.user.user) AppUser: firebase.User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
