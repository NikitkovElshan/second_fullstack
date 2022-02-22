import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {ITeacher} from '../shared/interfaces/interface'
import {ApiService} from "../shared/services/api.service";
import {DataService} from "../shared/services/data.service";
import {DialogTeacherComponent} from "../dialog-teacher/dialog-teacher.component";
import {AreYouSureDialogComponent} from "../shared/components/are-you-sure-dialog/are-you-sure-dialog.component";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  displayedColumns: string[] = ['surname', 'name', 'patronymic', 'born', 'gender', 'subject', 'edit', 'remove']
  dataSource = new MatTableDataSource<ITeacher>([]);

  private dialogRefTeacher: MatDialogRef<DialogTeacherComponent> | undefined;
  private dialogAreYouSure: MatDialogRef<AreYouSureDialogComponent> | undefined;

  constructor(private api: ApiService,
              public data: DataService,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    this.api.getAllTeachers().subscribe(res=>{
        this.data.teachers = res
        this.dataSource.data = [...this.data.teachers]
      },
      err=>{
        console.log(err);})

  }


  openAddDialog(){
    this.dialogRefTeacher = this.dialog.open(DialogTeacherComponent, {
      width: '40%',
      data: null
    })
    this.dialogRefTeacher.afterClosed().subscribe(res=>{
      this.updateDataSource()
    })

  }

  openEditDialog(el: ITeacher){
    this.dialogRefTeacher = this.dialog.open(DialogTeacherComponent, {
      width: '40%',
      data: el
    })
    this.dialogRefTeacher.afterClosed().subscribe(res=>{
      this.updateDataSource()
    })
  }

  remove(el: ITeacher){
    this.dialogAreYouSure = this.dialog.open(AreYouSureDialogComponent, {});
    this.dialogAreYouSure.afterClosed().subscribe(event => {
      if (event) {
        this.api.removeTeachers(el.id!).subscribe(res=>{
          for(let i=0;i<this.data.teachers.length;i++){
            if(this.data.teachers[i].id === el.id){
              this.data.teachers.splice(i,1)
              break
            }
          }
          this.updateDataSource()
        },err=>{})
      }
    })

  }

  updateDataSource(){
     this.dataSource.data = [...this.data.teachers]
  }

}
