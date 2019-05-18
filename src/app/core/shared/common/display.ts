import * as moment from 'moment';

export class Display {
    private static _chars = ['$', '#', '@', '&', '%', '%', '<', '£', '>', '//', '||', '\\\\'];
    private static _colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

    static successUpdate(msg = 'Update made successfully'): string {
      return msg;
    }

    static errorMessage(msg = 'It seems something went wrong'): string {
      return msg;
    }

    static jsonSanitize(jsonObject) {
      return JSON.parse(JSON.stringify(jsonObject, function(k, v) {
        if (v === undefined) { return null; } return v;
     }));
    }

    static chars() {
      return Display._chars[Math.floor(Math.random() * Display._chars.length)];
    }

    static colors() {
      return Display._colors[Math.floor(Math.random() * Display._colors.length)];
    }

    static chosenYearHandler(normalizedYear: moment.Moment) {
      const ctrlValue = moment();
      ctrlValue.year(normalizedYear.year());
      return ctrlValue;
    }

    static chosenMonthHandler(normalizedMonth: moment.Moment) {
      const ctrlValue = moment();
      ctrlValue.year(normalizedMonth.year());
      ctrlValue.month(normalizedMonth.month());
      return ctrlValue.toDate();
    }
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


