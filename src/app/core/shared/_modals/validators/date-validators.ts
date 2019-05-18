import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';

export class DateValidator {

    static invalidDate(c: AbstractControl): ValidationErrors | null {

        if (!moment(c.value, moment.ISO_8601, true).isValid()) {
        return {invalidDateFormat: true};
        }

        return null;
    }

    static notFuture(c: AbstractControl): ValidationErrors | null {

        if (moment().isBefore(moment(c.value, moment.ISO_8601, true))) {
            return {invalidDateLogic: true};
        }

        return null;
    }

    static compareDates(g: AbstractControl): ValidationErrors | null {
        if (
            g.parent === undefined ||
            !moment(g.parent.get('startDate').value, moment.ISO_8601, true).isValid() ||
            !moment(g.parent.get('endDate').value, moment.ISO_8601, true).isValid()
            ) { return null; }

        const startDate = g.parent.get('startDate');
        const endDate = g.parent.get('endDate');

        if (moment(endDate.value).isBefore(moment(startDate.value))) {
            return {invalidStartEnd: true};
         }
         return null;
    }

}
