import { AppBase } from './app-base';
import * as moment from 'moment';

export class AppEducation extends AppBase {
    courseOfStudy: string;
    endDate: Date;
    grade: string;
    institution: string;
    key: string;
    location: string;
    startDate: Date;

    constructor(data: Partial<AppEducation>) {
        super();
        Object.assign(this, data);
    }

    duration() {
        return moment(this.startDate).format('MMM, YYYY') + ' - ' +  moment(this.endDate).format('MMM, YYYY');
    }

    get gradeScore() {
        return (this.grade) ? ', (' + this.grade + ')' : '';
    }
}
