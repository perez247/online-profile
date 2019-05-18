import { AppSocialLink } from './../../core/shared/model/app-social-link';
import { AppContacts } from './../../core/shared/model/app-contacts';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/shared/_services/contact.service';
import { NgModel } from '@angular/forms';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { SaveContactsSocialComponent } from 'src/app/core/shared/_modals/save-contacts-social/save-contacts-social.component';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  contacts: AppContacts;
  original: AppContacts;


  constructor(private contactService: ContactService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getEntity().subscribe((r: any) => {
      this.contacts = new AppContacts(r);
      this.original = new AppContacts(r);
    });
  }

  save() {
    this.contactService.save(this.contacts);
  }

  anyChange() {
    return _.isEqual(this.contacts, this.original);
  }

  editSocialLink(socialLink?: any) {
    const ref = this.dialog.open(SaveContactsSocialComponent, {
      data: socialLink
    });

    ref.afterClosed().subscribe((r: AppSocialLink) => {
      if (r) {
        this.addSocialLink(r);
      }
    });
  }

  addSocialLink(data: AppSocialLink) {
    const i = this.contacts.socialLinks.findIndex(_item => _item.name === data.name);
    if (i > -1) { this.contacts.socialLinks[i] = data; } else { this.contacts.socialLinks.push(data); }
  }

  removeSocialLink(data: AppSocialLink) {
    this.contacts.socialLinks = this.contacts.socialLinks.filter(link => link.name !== data.name);
  }

}
