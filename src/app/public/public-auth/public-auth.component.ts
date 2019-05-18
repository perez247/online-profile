import { AuthService } from './../../core/shared/_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-public-auth',
  templateUrl: './public-auth.component.html',
  styleUrls: ['./public-auth.component.css']
})
export class PublicAuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    // console.log(form.value);
    this.authService.login({email: form.value.emailSignIn, password: form.value.passwordSignIn });
  }

  loginAsGuest() {
    const guest = environment.guest;
    this.authService.login({email: guest.email, password: guest.password });
  }

}
