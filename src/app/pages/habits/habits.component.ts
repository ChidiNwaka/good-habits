import { Component, OnInit } from '@angular/core';
import { habits } from 'src/app/mockData/habits';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {

  habits =  habits;
  showTable = true; 

  constructor() { }

  ngOnInit(): void {
  }

  onCreateHabit(): void {
    this.showTable = false;
  }

  onShowTable(): void {
    this.showTable = true;
  }

}
