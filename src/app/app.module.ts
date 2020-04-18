import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DailyStatusComponent } from './pages/daily-status/daily-status.component';
import { HabitsComponent } from './pages/habits/habits.component';
import { TopHeaderComponent } from './components/layout/top-header/top-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridEditFormComponent } from './components/forms/grid-edit-form/grid-edit-form.component';
import { AddHabitComponent } from './components/add-habit/add-habit.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { DailyStatusItemComponent } from './pages/daily-status/daily-status-item/daily-status-item.component';

const appRoutes: Routes = [
  {path: 'status', component: DailyStatusComponent},
  {path: 'habits', component: HabitsComponent},
  { path: '',
    redirectTo: '/status',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DailyStatusComponent,
    HabitsComponent,
    TopHeaderComponent,
    PageNotFoundComponent,
    GridEditFormComponent,
    AddHabitComponent,
    DailyStatusItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
