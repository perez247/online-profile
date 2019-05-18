import { AppExperience } from './../../core/shared/model/app-experience';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/core/shared/_services/experience.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-public-experience',
  templateUrl: './public-experience.component.html',
  styleUrls: ['./public-experience.component.css']
})
export class PublicExperienceComponent implements OnInit {

  exps: AppExperience[] = [];

  constructor(
    private exprerience: ExperienceService
  ) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() {
    this.exprerience.getAll().subscribe((r: any[]) => {
      // console.log(r);
      r.forEach((v) => {
        this.exps.push(new AppExperience(v));
      });
      this.exps = _.orderBy(this.exps, ['startDate'], ['desc']);
    });
  }

}
