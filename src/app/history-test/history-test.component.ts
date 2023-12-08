import { Component } from '@angular/core';

@Component({
  selector: 'app-history-test',
  templateUrl: './history-test.component.html',
  styleUrls: ['./history-test.component.css']
})
export class HistoryTestComponent {
  daysOfTheMonth: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
  weeksOfTheMonth: string[] = ['Days', 'Hours', 'Minutes'];
  historyOfTheMonth: string[] = ['Days', 'Months', 'Weeks', 'Years'];
  selectedOption2: string = '';
  selectedOption1: string = '';
  selectedOption3: string = '';
  selectedOption4: string = '';
  selectedOption7: string = '';
  selectedOption8: string = '';
}
