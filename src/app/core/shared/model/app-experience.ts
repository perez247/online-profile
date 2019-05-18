import * as moment from 'moment';
import { AppBase } from './app-base';

export class AppExperience extends AppBase {
    achievements: string;
    companyName: string;
    endDate: Date;
    key: string;
    location: string;
    role: string;
    startDate: Date;

    constructor(data: Partial<AppExperience>) {
        super();
        Object.assign(this, data);
    }

    duration() {
        return moment(this.startDate).format('MMMM, YYYY') + ' - ' +  moment(this.endDate).format('MMMM, YYYY');
    }
}
