import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/shared/_services/contact.service';
import { AppContacts } from 'src/app/core/shared/model/app-contacts';

@Component({
  selector: 'app-public-contact',
  templateUrl: './public-contact.component.html',
  styleUrls: ['./public-contact.component.css']
})
export class PublicContactComponent implements OnInit {
  contacts: AppContacts;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getEntity().subscribe((r: any) => {
      this.contacts = new AppContacts(r);
    });
  }

}
