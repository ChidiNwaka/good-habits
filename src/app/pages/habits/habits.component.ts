import { IHabit } from '../../models/habits';
import { Component, OnInit } from '@angular/core';
import { HabitsService } from 'src/app/services/habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  habits$: IHabit[];
  showTable = true;

  constructor(private habitsService: HabitsService) { }

  ngOnInit(): void {
    this.habitsService.getHabits().subscribe(response => {
      this.habits$ = response;
    });
  }

  onCreateHabit(): void {
    this.showTable = false;
  }

  onShowTable(): void {
    this.showTable = true;
  }

}
