import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-glitch',
  templateUrl: './home-glitch.component.html',
  styleUrls: ['./home-glitch.component.css']
})
export class HomeGlitchComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
