import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TextScramble } from './scrambletext';

@Component({
  selector: 'app-scramble-text',
  templateUrl: './scramble-text.component.html',
  styleUrls: ['./scramble-text.component.css']
})
export class ScrambleTextComponent implements OnInit, OnDestroy {

  @Input() text: string;

  handle: any;

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
          this.handle = setTimeout(next, 10000);
        });
        counter = (counter + 1) % caption.length;
      };

    next();
  }

  compileText(caption: string) {

    const textArray = [];

    let counter = 0;

    // for (let index = 0; index < 1; index++) {

    //   textArray.push(caption);
    //   textArray.push(this.getRandomLetters(caption));

    // }

    while (caption.length > counter) {
      textArray.push(caption);
      textArray.push(this.getRandomLetters(caption));

      counter++;
    }

    return textArray;
  }

  getRandomLetters(text: string) {
    let letters = '';

    text.split(' ').forEach((element: string) => {
      const index = Math.floor(Math.random() * (element.length - 1) );
      letters += element.charAt(index) + ' ';
    });

    return letters;
  }

  ngOnDestroy() {
    clearTimeout(this.handle);
  }

}
