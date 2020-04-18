import { IHabit } from './../../models/habits';
import { HabitsService } from 'src/app/services/habits.service';
import { IDailyHabit } from '../../models/habits';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.css'],
})
export class DailyStatusComponent implements OnInit {
  dailyHabits: IDailyHabit[];
  allHabits: any;

  constructor(private habitsService: HabitsService) {}

  ngOnInit(): void {
    this.habitsService.getHabits().subscribe((habits: IHabit[]) => {
      this.allHabits = habits;
      this.dailyHabits = habits.map((habit) => {
          return {
            id: habit.id,
            title: habit.title,
            completed: false,
          };
        });
    });
  }

  deleteHabit(dailyHabit: IDailyHabit) {

    // On UI
    this.dailyHabits = this.dailyHabits.filter(habit => habit.id !== dailyHabit.id);

    // On server
    this.habitsService.deleteHabit(dailyHabit.id);
  }

  onToggle(dailyHabit: IDailyHabit) {
    // On UI
    this.dailyHabits = this.dailyHabits.map((obj) =>
      obj.id === dailyHabit.id
        ? { ...obj, completed: dailyHabit.completed }
        : obj
    );
  }

  onSubmit() {

    // On Server
    this.dailyHabits.forEach(dailyHabit => {
      const habitToUpdate: IHabit = this.allHabits.find(habit => habit.id === dailyHabit.id);
      if (dailyHabit.completed){
        habitToUpdate.daysCompleted += 1;
        this.habitsService.updateHabit(habitToUpdate);
      }
    });

    // on UI
    this.onClear();
  }

  onClear() {
    this.dailyHabits = this.dailyHabits.map(habit => {
      habit.completed = false;
      return habit;
    });
  }

  onCancel(){
    this.dailyHabits = this.allHabits;
  }

}
