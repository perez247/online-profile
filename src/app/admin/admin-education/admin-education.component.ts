import { Component, OnInit } from '@angular/core';
import { AppEducation } from 'src/app/core/shared/model/app-education';
import { EducationService } from 'src/app/core/shared/_services/education.service';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { SaveEducationComponent } from 'src/app/core/shared/_modals/save-education/save-education.component';

@Component({
  selector: 'app-admin-education',
  templateUrl: './admin-education.component.html',
  styleUrls: ['./admin-education.component.css']
})
export class AdminEducationComponent implements OnInit {

  educationList: AppEducation[] = [];

  constructor(private eduService: EducationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllEducation();
  }

  getAllEducation() {
    this.eduService.getAll().subscribe(r => {
      this.educationList.length = 0;
      r.forEach((v) => {
        this.educationList.push(new AppEducation(v));
      });
      this.educationList = _.orderBy(this.educationList, ['startDate'], ['desc']);
    });
  }

  addEducation() {
    this.dialog.open(SaveEducationComponent, {
      data: {}
    });
  }

  editEducation(exp: AppEducation) {
    this.dialog.open(SaveEducationComponent, {
      data: {
        education: exp
      }
    });
  }

  deleteEducation(exp: AppEducation) {
    this.eduService.delete(exp);
  }



}
