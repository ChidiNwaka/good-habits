import { IDailyHabit } from '../../models/habits';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.css']
})
export class HabitItemComponent implements OnInit {

  @Input() habit;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(habit: IDailyHabit): void {
    habit.completed = !habit.completed;
    console.log(habit.completed);
    this.onToggle.emit(habit);
  }

  deleteItem(habit: IDailyHabit) {
    console.log(`habit ${habit} deleted...`);
    this.onDelete.emit(habit);
  }
}
