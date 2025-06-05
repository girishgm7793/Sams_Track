// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path:'admin-dashboard',component:AdminDashboardComponent
  },
  {
    path:'faculty-dashboard',component:FacultyDashboardComponent
  },
  {
    path:'add-user',component:AddUserComponent
  },
  {
    path:'all-users', component:AllUsersComponent

  },
  {
    path:'edit-users/:username', component:EditUsersComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
