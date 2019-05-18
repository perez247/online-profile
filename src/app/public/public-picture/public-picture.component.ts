import { FileService } from './../../core/shared/_services/file.service';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { forkJoin } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { AppContacts } from 'src/app/core/shared/model/app-contacts';
import { ContactService } from 'src/app/core/shared/_services/contact.service';
import { IAppState } from 'src/app/core/state-management/root/root-store';
import { UIActionConstant } from 'src/app/core/state-management/ui/ui-action-constants';

@Component({
  selector: 'app-public-picture',
  templateUrl: './public-picture.component.html',
  styleUrls: ['./public-picture.component.css']
})
export class PublicPictureComponent implements OnInit {
  contacts: AppContacts;
  cvLink: string;

  constructor(
    private contactService: ContactService,
    private redux: NgRedux<IAppState>,
    private router: Router,
    public fileService: FileService
    ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getEntity().subscribe((r: any) => {
      this.contacts = new AppContacts(r);
    });

    this.fileService.getCv().subscribe(r => {
      this.cvLink = r;
    });
  }

  showLoader() {
    this.checkUrls();
  }

  checkUrls() {
    this.router.events
    .pipe(
      filter(event => event instanceof RoutesRecognized),
      pairwise()
    )
    .subscribe((e: any) => {
        console.log(e[0].urlAfterRedirects);
        if (e[0].urlAfterRedirects !== e[1].urlAfterRedirects) {
          this.redux.dispatch( {type: UIActionConstant.LOADING_RIGHT_CONTENT, loading: true} );
        }
    });
  }
}
