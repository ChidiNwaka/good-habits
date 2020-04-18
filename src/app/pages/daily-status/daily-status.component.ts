import { HabitsService } from 'src/app/services/habits.service';
import { habits } from 'src/app/mockData/habits';
import { IDailyHabit } from '../../models/habits';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.css']
})
export class DailyStatusComponent implements OnInit {

  dailyHabits: IDailyHabit[] = [];

  constructor(private habitsService: HabitsService) { }

  ngOnInit(): void {

    this.dailyHabits = habits.map(habit => {
      return {
        id: habit.id,
        title: habit.title,
        completed: false
      }
    });
  }

  deleteHabit(dailyHabit: IDailyHabit) {
    console.log('In Habits / parent', dailyHabit);
  }

  onToggle(dailyHabit: IDailyHabit) {

    // On UI
    this.dailyHabits = this.dailyHabits.map(obj => obj.id === dailyHabit.id ? {...obj, completed: dailyHabit.completed} : obj);

  }

}
