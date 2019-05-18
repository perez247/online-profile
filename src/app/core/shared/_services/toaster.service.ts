import { Injectable, Component } from '@angular/core';
// declare let alertify: any;
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  config = new MatSnackBarConfig();
  action = 'close';


  constructor(private snackBar: MatSnackBar) {
    this.setDefaults();
  }

  setDefaults() {
    this.config.duration = 10000;
    this.config.panelClass = ['bg-white', 'h5'];
  }

  private addCss(className: string) {
    this.config.panelClass = [];
    this.config.panelClass = ['bg-white', 'text-center', 'h5' , className];
  }

  // confirm(message: string, okCallBack: () => any) {
  //   console.log(message);
  // }

  success(message: string) {
    this.addCss('text-success');
    this.snackBar.open(message, this.action, this.config);
  }

  error(message: string) {
    this.addCss('text-danger');
    this.snackBar.open(message, this.action, this.config);
  }

  message(message: string) {
    // console.log(message);
    this.addCss('text-primary');
    this.snackBar.open(message, this.action, this.config);
  }



}
