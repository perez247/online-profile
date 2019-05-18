import { Component, OnInit } from '@angular/core';
import { AppExperience } from 'src/app/core/shared/model/app-experience';
import { ExperienceService } from 'src/app/core/shared/_services/experience.service';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { SaveExperienceComponent } from 'src/app/core/shared/_modals/save-experience/save-experience.component';

// tslint:disable-next-line:no-duplicate-imports
// import { _rollupMoment, Moment} from 'moment';

// const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-admin-experience',
  templateUrl: './admin-experience.component.html',
  styleUrls: ['./admin-experience.component.css']
})
export class AdminExperienceComponent implements OnInit {

  exps: AppExperience[] = [];

  constructor(
    private exprerience: ExperienceService,  private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() {
    this.exprerience.getAll().subscribe((r: any[]) => {
      // console.log(r);
      this.exps.length = 0;
      r.forEach((v) => {
        this.exps.push(new AppExperience(v));
      });
      this.exps = _.orderBy(this.exps, ['startDate'], ['desc']);
    });
  }

  addExperience() {
    this.dialog.open(SaveExperienceComponent, {
      data: {}
    });
  }

  editExperience(exp: AppExperience) {
    this.dialog.open(SaveExperienceComponent, {
      data: {
        experience: exp
      }
    });
  }

  deleteExperience(exp: AppExperience) {
    this.exprerience.delete(exp);
  }



}
