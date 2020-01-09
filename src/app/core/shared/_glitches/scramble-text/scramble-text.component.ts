import { Component, OnInit, Input } from '@angular/core';
import { TextScramble } from './scrambletext';

@Component({
  selector: 'app-scramble-text',
  templateUrl: './scramble-text.component.html',
  styleUrls: ['./scramble-text.component.css']
})
export class ScrambleTextComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
    this.startScrambling();
  }

  startScrambling() {
    const el = document.querySelector('.text');
    const fx = new TextScramble(el);

    const caption = this.compileText(this.text);

    let counter = 0;
    const next = () => {
        fx.setText(caption[counter]).then(() => {
          setTimeout(next, 10000);
        });
        counter = (counter + 1) % caption.length;
      };

    next();
  }

  compileText(caption: string) {

    const textArray = [];
    this.getFirstLetters(this.text);

    for (let index = 0; index < 1; index++) {

      textArray.push(caption);
      textArray.push(this.getFirstLetters(caption));

    }

    return textArray;
  }

  getFirstLetters(text: string) {
    let letters = '';

    text.split(' ').forEach((element: string) => {
      letters += element.charAt(0) + ' ';
    });

    return letters;
  }

}
