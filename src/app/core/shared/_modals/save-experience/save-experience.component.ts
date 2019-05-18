import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { ExperienceService } from '../../_services/experience.service';
import { Display } from './../../common/display';
import { AppExperience } from './../../model/app-experience';
import { DateValidator } from './../validators/date-validators';


@Component({
  selector: 'app-save-experience',
  templateUrl: './save-experience.component.html',
  styleUrls: ['./save-experience.component.css']
})
export class SaveExperienceComponent implements OnInit {

  experience: AppExperience;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private daiolgRef: MatDialogRef<SaveExperienceComponent>,
    private experienceService: ExperienceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.setSentExp();
    this.initialForm();
  }

  initialForm() {
    this.form = this.fb.group({
      companyName: [this.experience.companyName, Validators.required],
      location: [this.experience.location, Validators.required],
      achievements: [this.experience.achievements, Validators.required],
      role: [this.experience.role, Validators.required],
      startDate: [this.experience.startDate, [Validators.required, DateValidator.invalidDate, DateValidator.notFuture]],
      endDate: [
                this.experience.endDate,
                [Validators.required, DateValidator.invalidDate, DateValidator.notFuture, DateValidator.compareDates]
              ],
      key: [this.experience.key]
    });
  }

  setSentExp() {
    if (this.data.experience) {
      this.experience = this.data.experience as AppExperience;
    } else {
      this.experience = {} as AppExperience;
    }
  }

  save() {
    // this.experienceService.
    this.experienceService.save(this.form.value)
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
