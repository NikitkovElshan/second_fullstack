import {Component, Inject, OnInit} from '@angular/core';
import {IClass} from "../shared/interfaces/interface";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ApiService} from "../shared/services/api.service";
import {DataService} from "../shared/services/data.service";


@Component({
  selector: 'app-dialog-classes',
  templateUrl: './dialog-classes.component.html',
  styleUrls: ['./dialog-classes.component.scss']
})
export class DialogClassesComponent implements OnInit {

  public clas: IClass = {
    year: "" ,
    mnemo: "",
    classroom_teacher_id: ""
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: IClass,
              private api: ApiService,
              private dialog: MatDialog,
              public dataService: DataService) {
    if (data) {
      this.clas = JSON.parse(JSON.stringify(data));
    }
  }

  ngOnInit(): void {
  }

  save(){
    if(this.data){
      this.api.editClass(this.clas).subscribe(res=>{
        for(let i=0;i<this.dataService.classes.length;i++){
          if(this.dataService.classes[i].id == this.data.id){
            this.dataService.classes[i] = JSON.parse(JSON.stringify(this.clas));
          }
        }
        this.dialog.closeAll()
      },err=>{
        console.log(err);
      })
    } else {
      this.api.addClass(this.clas).subscribe(res=>{
        this.dataService.classes.push(res.clas)
        this.dialog.closeAll()
      },err=>{
        console.log(err);
      })
    }
  }

}
