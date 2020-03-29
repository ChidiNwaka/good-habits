import { habits } from 'src/app/mockData/habits';
import { ICreateHabit } from './../../model/habits';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.css']
})
export class DailyStatusComponent implements OnInit {

  habits: ICreateHabit[] = [];

  constructor() { }

  ngOnInit(): void {

    this.habits = habits.map(habit => {
      return {
        id: habit.id,
        title: habit.title,
        completed: false
      }
    });
  }

  deleteHabit(habit: ICreateHabit) {
    console.log('In Habits / parent', habit);
  }

  onToggle(habit: ICreateHabit) {

    this.habits = this.habits.map(obj => obj.id === habit.id ? {...obj, completed: habit.completed} : obj);
  }

}
