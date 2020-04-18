import { IHabit } from '../models/habits';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HabitsService {

  habitsUrl = 'http://localhost:3000/api/v1/habits';

  constructor(private http: HttpClient) { }

  getHabits(): Observable<IHabit[]> {
    return this.http.get<IHabit[]>(this.habitsUrl);
  }

  getHabitById(id: string): Observable<IHabit> {
    const url = `${this.habitsUrl}/${id}`;
    return this.http.get<IHabit>(url, httpOptions);
  }

  addHabit(habit: IHabit): Observable<IHabit> {
    return this.http.post<IHabit>(this.habitsUrl, habit, httpOptions);
  }

  updateHabit(habit: IHabit): Observable<IHabit> {
    return this.http.put<IHabit>(this.habitsUrl, habit, httpOptions);
  }

  deleteHabit(id: string): Observable<IHabit> {
    const url = `${this.habitsUrl}/${id}`;
    return this.http.delete<IHabit>(url, httpOptions);
  }
}
