import {Component, Inject, OnInit} from '@angular/core';
import {IStudent, ITeacher} from "../shared/interfaces/interface";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ApiService} from "../shared/services/api.service";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-student.component.html',
  styleUrls: ['./dialog-student.component.scss']
})
export class DialogStudentComponent implements OnInit {

  public student: IStudent = {
    surname: "",
    name: "",
    patronymic: "",
    born: "",
    gender: "",
    class_id: ""
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: IStudent,
              private api: ApiService,
              private dialog: MatDialog,
              public dataService: DataService) {
    if (data) {
      this.student = JSON.parse(JSON.stringify(data));
    }
  }

  ngOnInit(): void {
  }

  save(){
    if(this.data){
      this.api.editStudent(this.student).subscribe(res=>{
        for(let i=0;i<this.dataService.students.length;i++){
          if(this.dataService.students[i].id == this.data.id){
            this.dataService.students[i] = JSON.parse(JSON.stringify(this.student));
          }
        }
        this.dialog.closeAll()
      },err=>{
        console.log(err);
      })

    } else {
      this.api.addStudent(this.student).subscribe(res=>{
        this.dataService.students.push(res.student)
        this.dialog.closeAll()
      },err=>{
        console.log(err);
      })
    }
  }

}
