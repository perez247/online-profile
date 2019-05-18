import { Display } from './../common/display';

export class AppBase {

    chars: string;
    color: string;

    constructor() {
        this.chars = Display.chars();
        this.color = Display.colors();
    }

}
