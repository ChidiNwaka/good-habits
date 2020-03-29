import { ICreateHabit } from './../../model/habits';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.css']
})
export class HabitItemComponent implements OnInit {

  @Input() habit;

  @Output() nameChange: EventEmitter<any> = new EventEmitter();

  // @Output() nameChange: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(habit: ICreateHabit): void {
    habit.completed = !habit.completed;
    console.log(habit.completed);
    this.onToggle.emit(habit);
  }

  deleteItem(habit: ICreateHabit) {
    console.log(`habit ${habit} deleted...`);
    this.onDelete.emit(habit);
  }
}
