import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from 'src/app/core/shared/_services/contact.service';
import { AppSocialLink } from './../../model/app-social-link';

@Component({
  selector: 'app-save-contacts-social',
  templateUrl: './save-contacts-social.component.html',
  styleUrls: ['./save-contacts-social.component.css']
})
export class SaveContactsSocialComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AppSocialLink,
    private daiolgRef: MatDialogRef<SaveContactsSocialComponent>,
    public contactService: ContactService
  ) { }

  ngOnInit() {
    // console.log(this.data);
  }

  save() {
    this.daiolgRef.close(this.data);
  }

}
