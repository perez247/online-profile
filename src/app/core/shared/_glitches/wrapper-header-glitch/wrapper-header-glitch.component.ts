import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper-header-glitch',
  templateUrl: './wrapper-header-glitch.component.html',
  styleUrls: ['./wrapper-header-glitch.component.css']
})
export class WrapperHeaderGlitchComponent implements OnInit {

  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
