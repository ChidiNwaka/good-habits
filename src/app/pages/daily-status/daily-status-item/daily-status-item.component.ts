import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IDailyHabit } from 'src/app/models/habits';

@Component({
  selector: 'app-daily-status-item',
  templateUrl: './daily-status-item.component.html',
  styleUrls: ['./daily-status-item.component.css']
})
export class DailyStatusItemComponent implements OnInit {

  @Input() dailyHabit;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(dailyHabit: IDailyHabit): void {
    dailyHabit.completed = !dailyHabit.completed;
    console.log(dailyHabit.completed);
    this.onToggle.emit(dailyHabit);
  }

  deleteItem(dailyHabit: IDailyHabit) {
    console.log(`habit ${dailyHabit} deleted...`);
    this.onDelete.emit(dailyHabit);
  }
}
