import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {ClassesComponent} from "./classes/classes.component";

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'student', component: StudentComponent},
      {path: 'teacher',component: TeacherComponent},
      {path: 'classes', component: ClassesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
