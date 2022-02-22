import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {ClassesComponent} from './classes/classes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {DialogStudentComponent} from './dialog-student/dialog-student.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import { DialogTeacherComponent } from './dialog-teacher/dialog-teacher.component';
import { DialogClassesComponent } from './dialog-classes/dialog-classes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { AreYouSureDialogComponent } from './shared/components/are-you-sure-dialog/are-you-sure-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    StudentComponent,
    TeacherComponent,
    ClassesComponent,
    DialogStudentComponent,
    DialogTeacherComponent,
    DialogClassesComponent,
    AreYouSureDialogComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
