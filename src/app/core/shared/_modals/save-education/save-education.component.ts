import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { AppEducation } from 'src/app/core/shared/model/app-education';
import { EducationService } from 'src/app/core/shared/_services/education.service';
import { Display } from '../../common/display';
import { SaveExperienceComponent } from '../save-experience/save-experience.component';
import { DateValidator } from '../validators/date-validators';


@Component({
  selector: 'app-save-education',
  templateUrl: './save-education.component.html',
  styleUrls: ['./save-education.component.css']
})
export class SaveEducationComponent implements OnInit {

  education: AppEducation;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private daiolgRef: MatDialogRef<SaveExperienceComponent>,
    private educationService: EducationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.setSentEdu();
    this.initialForm();
  }

  initialForm() {
    this.form = this.fb.group({
      institution: [this.education.institution, Validators.required],
      location: [this.education.location, Validators.required],
      courseOfStudy: [this.education.courseOfStudy, Validators.required],
      grade: [this.education.grade, Validators.required],
      startDate: [this.education.startDate, [Validators.required, DateValidator.invalidDate, DateValidator.notFuture]],
      endDate: [
                this.education.endDate,
                [Validators.required, DateValidator.invalidDate, DateValidator.notFuture, DateValidator.compareDates]
              ],
      key: [this.education.key]
    });
  }

  setSentEdu() {
    if (this.data.education) {
      this.education = this.data.education as AppEducation;
    } else {
      this.education = {} as AppEducation;
    }
  }

  save() {
    // this.experienceService.
    this.educationService.save(this.form.value)
    .then(r => this.daiolgRef.close());
  }

  chosenYearHandler(normalizedYear: moment.Moment, name: string) {
    this.form.get(name).setValue(Display.chosenYearHandler(normalizedYear));
  }

  chosenMonthHandler(normalizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>, name: string) {
    this.form.get(name).setValue(Display.chosenMonthHandler(normalizedMonth));
    datepicker.close();
  }

}
