import { PortfolioService } from './../../_services/portfolio.service';
import { AppPortfolio } from './../../model/app-portfolio';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SaveExperienceComponent } from '../save-experience/save-experience.component';
import { ExperienceService } from '../../_services/experience.service';
import { NgModel } from '@angular/forms';
import { Display } from '../../common/display';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-save-portfolio',
  templateUrl: './save-portfolio.component.html',
  styleUrls: ['./save-portfolio.component.css']
})
export class SavePortfolioComponent implements OnInit {

  portfolio: AppPortfolio;
  toolsSet: {name: string, color: string}[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private daiolgRef: MatDialogRef<SaveExperienceComponent>,
    private portfolioService: PortfolioService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.setSentPort();
    this.cdRef.detectChanges();
  }

  setSentPort() {
    if (this.data.portfolio) {
      this.portfolio = this.data.portfolio as AppPortfolio;

      this.portfolio.tools.forEach(v => {
        this.toolsSet.push({ name: v, color: Display.colors() });
      });


    } else {
      this.portfolio = new AppPortfolio({});
      this.portfolio.tools = [];
    }
  }

  getSkill(event: NgModel) {
    // console.log(event);
    if (event.value) {

      this.portfolio.tools.push(event.value);

      this.toolsSet.push({ name: event.value, color: Display.colors() });

      event.reset();
    }

  }

  removeSkill(skillName: string) {
    this.portfolio.tools = this.portfolio.tools.filter(to => to !== skillName);
    this.toolsSet = this.toolsSet.filter(to => to.name !== skillName);
  }

  save() {
    // this.experienceService.
    this.portfolio.serializeTools();

    this.portfolioService.save(this.portfolio)
    .then(r => this.daiolgRef.close());
    // console.log(this.portfolio);
  }

}
