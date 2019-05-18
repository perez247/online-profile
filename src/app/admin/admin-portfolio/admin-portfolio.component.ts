import { Display } from './../../core/shared/common/display';
import { SavePortfolioComponent } from './../../core/shared/_modals/save-portfolio/save-portfolio.component';
import { AppPortfolio } from './../../core/shared/model/app-portfolio';
import { PortfolioService } from './../../core/shared/_services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.css']
})
export class AdminPortfolioComponent implements OnInit {

  portfolios: AppPortfolio[] = [];

  tools: { projectName: string, set: { name: string, color: string }[] }[] = [];

  constructor(private dialog: MatDialog, private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getPortfolio();
  }

  getPortfolio() {
    this.portfolioService.getAll().subscribe((r: any[]) => {
      // this.portfolios = r as AppPortfolio[];
      // console.log(this.portfolios);
      // console.log(r);
      this.portfolios.length = 0;
      r.forEach((v) => {
        const port = new AppPortfolio(v);

        const set: { name: string, color: string }[] = [];

        const tools: string[] = port.tools ? port.tools : [];

        tools.forEach((value) => {
          set.push({ name: value, color: Display.colors() });
        });

        this.tools.push({
          projectName: port.projectName,
          set
         });

        this.portfolios.push(port);


      });
      this.portfolios = _.orderBy(this.portfolios, ['projectName'], ['asc']);
    });
  }

  getTools(projectName: string) {
    const value = this.tools.find(proj => proj.projectName === projectName);
    return (value && value.set) ? value.set : [];
  }

  addPortfolio() {
    this.dialog.open(SavePortfolioComponent, {
      data: {}
    });
  }

  editPortfolio(port: AppPortfolio) {
    this.dialog.open(SavePortfolioComponent, {
      data: {
        portfolio: port
      }
    });
  }

  deleteExperience(port: AppPortfolio) {
    this.portfolioService.delete(port);
  }


}
