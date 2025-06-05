import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/view-all-attendance/view-all-attendance.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './components/faculty-menu/faculty-menu.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AllSubjectComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AddUserComponent,
    AllUsersComponent,
    EditUsersComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    ViewAllAttendanceComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudentComponent,
    AllStudentComponent,
    EditStudentComponent,
    TakeAttendanceComponent,
    ViewAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
