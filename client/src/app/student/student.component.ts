import { Component, OnInit } from '@angular/core';

import {DialogStudentComponent} from "../dialog-student/dialog-student.component";
import {IStudent} from '../shared/interfaces/interface'
import {ApiService} from "../shared/services/api.service";
import {DataService} from "../shared/services/data.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AreYouSureDialogComponent} from '../shared/components/are-you-sure-dialog/are-you-sure-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  private dialogRefStudent: MatDialogRef<DialogStudentComponent> | undefined;
  private dialogAreYouSure: MatDialogRef<AreYouSureDialogComponent> | undefined;

  constructor(private api: ApiService,
              public data: DataService,
              public dialog: MatDialog) { }

  displayedColumns: string[] = ['surname', 'name', 'patronymic', 'born', 'gender', 'class_id', 'edit', 'remove']
  dataSource = new MatTableDataSource<IStudent>([]);

  ngOnInit(): void {
    this.api.getAllStudents().subscribe(res=>{
      this.data.students = res
      this.dataSource.data = [...this.data.students]
      },
        err=>{
      console.log(err);})
  }

  openAddDialog(){this.dialogRefStudent = this.dialog.open(DialogStudentComponent, {
    width: '40%',
    data: null
  })
    this.dialogRefStudent.afterClosed().subscribe(res=>{
      this.updateDataSource()
    })
  }

  openEditDialog(el: IStudent){

    this.dialogRefStudent = this.dialog.open(DialogStudentComponent, {
      width: '40%',
      data: el
    })
    this.dialogRefStudent.afterClosed().subscribe(res=>{
      this.updateDataSource()
    })

  }

  remove(el: IStudent){

    this.dialogAreYouSure = this.dialog.open(AreYouSureDialogComponent, {});
    this.dialogAreYouSure.afterClosed().subscribe(event => {
      if (event) {
        this.api.removeStudent(el.id!).subscribe(res=>{
          for(let i=0;i<this.data.students.length;i++){
            if(this.data.students[i].id === el.id){
              this.data.students.splice(i,1)
              break
            }
          }
          this.updateDataSource()
        },err=>{})
      }
    })

  }

  updateDataSource(){
    this.dataSource.data = [...this.data.students]
  }

  getClassId(id:number) {
    for(let i=0;i<this.data.classes.length;i++){
      if(id === this.data.classes[i].id){
        return this.data.classes[i].year + ' ' + this.data.classes[i].mnemo
      }
    }
    return 'no teacher'
  }

}

