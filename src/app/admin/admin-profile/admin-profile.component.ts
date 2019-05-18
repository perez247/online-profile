import { Component, OnInit } from '@angular/core';
import { AppProfile } from './../../core/shared/model/app-profile';
import { ProfileService } from './../../core/shared/_services/profile.service';
import { ToasterService } from './../../core/shared/_services/toaster.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  profile: AppProfile;

  constructor(private profileService: ProfileService, private toaster: ToasterService) { }

  ngOnInit() {
    this.getDescriprions();
  }

  save() {
    this.profileService.save(this.profile);
  }

  getDescriprions() {
    this.profileService.getEntity().subscribe(data => {
      this.profile = data as AppProfile;
    });
  }

}
