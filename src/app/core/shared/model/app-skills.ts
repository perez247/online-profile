import { AppBase } from './app-base';


export class AppSkills extends AppBase {

    constructor(data: Partial<AppSkills>) {
        super();
        Object.assign(this, data);
    }

    key: string;
    description: string;
    skillName: string;
    years: number;
    type: string;
}
