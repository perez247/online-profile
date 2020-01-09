import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper-sidebar-glitch',
  templateUrl: './wrapper-sidebar-glitch.component.html',
  styleUrls: ['./wrapper-sidebar-glitch.component.css']
})
export class WrapperSidebarGlitchComponent implements OnInit {

  @Input() firstWord: string;
  @Input() secondWord: string;

  constructor() { }

  ngOnInit() {
  }

}
