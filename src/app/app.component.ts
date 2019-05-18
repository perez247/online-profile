import { AuthService } from './core/shared/_services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from './core/state-management/root/root-store';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),

      transition(':leave', [animate(1000)])
    ])
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  AppUser: any;

  @select((s: IAppState) => s.ui.rightLoader) loader: boolean;

  constructor(
    private authService: AuthService,
    private redux: NgRedux<IAppState>
  ) {}

  ngOnInit() {
    this.authService.authUser();
    this.scrollTime();
    // this.authService.user$.subscribe(user => {
    //   this.AppUser = user;
    //   console.log(user);
    // }, error => console.log(error));
  }

  scrollTime() {
    this.redux
      .select(s => s.ui.rightLoader)
      .subscribe(r => {
        if (this.content) {
          this.content.nativeElement.scrollIntoView({behavior: 'smooth'});
        }
      });
  }
}
