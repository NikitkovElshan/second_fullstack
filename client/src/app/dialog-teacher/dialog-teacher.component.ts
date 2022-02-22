import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ITeacher} from "../shared/interfaces/interface";
import {ApiService} from "../shared/services/api.service";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-dialog-teacher',
  templateUrl: './dialog-teacher.component.html',
  styleUrls: ['./dialog-teacher.component.scss']
})
export class DialogTeacherComponent implements OnInit {

  public teacher: ITeacher = {
    surname: "",
    name: "",
    patronymic: "",
    born: "",
    gender: "",
    subject: ""
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: ITeacher,
              private api: ApiService,
              private dialog: MatDialog,
              private dataService: DataService) {
    if (data) {
      this.teacher = JSON.parse(JSON.stringify(data));
    }
  }

  ngOnInit(): void {
  }

  save(){
    if(this.data){
      this.api.editTeacher(this.teacher).subscribe(res=>{
        for(let i=0;i<this.dataService.teachers.length;i++){
          if(this.dataService.teachers[i].id == this.data.id){
            this.dataService.teachers[i] = JSON.parse(JSON.stringify(this.teacher));
          }
        }
        this.dialog.closeAll()
      },err=>{
        console.log(err);
      })

    } else {
      this.api.addTeacher(this.teacher).subscribe(res=>{
        this.dataService.teachers.push(res.teacher)
        this.dialog.closeAll()
      },err=>{
        console.log(err);
      })
    }
  }

}
