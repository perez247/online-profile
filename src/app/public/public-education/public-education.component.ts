import { AppEducation } from './../../core/shared/model/app-education';
import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/core/shared/_services/education.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-public-education',
  templateUrl: './public-education.component.html',
  styleUrls: ['./public-education.component.css']
})
export class PublicEducationComponent implements OnInit {
  educationList: AppEducation[] = [];

  constructor(private eduService: EducationService) { }

  ngOnInit() {
    this.getAllEducation();
  }

  getAllEducation() {
    this.eduService.getAll().subscribe(r => {
      r.forEach((v) => {
        this.educationList.push(new AppEducation(v));
      });
      this.educationList = _.orderBy(this.educationList, ['startDate'], ['desc']);
    });
  }

}
