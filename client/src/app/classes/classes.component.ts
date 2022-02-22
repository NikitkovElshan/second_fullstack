import { Component, OnInit } from '@angular/core';

import {IClass} from '../shared/interfaces/interface'
import {ApiService} from "../shared/services/api.service";
import {DataService} from "../shared/services/data.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogClassesComponent} from "../dialog-classes/dialog-classes.component";
import {AreYouSureDialogComponent} from "../shared/components/are-you-sure-dialog/are-you-sure-dialog.component";


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  private dialogRefClasses: MatDialogRef<DialogClassesComponent> | undefined;
  private dialogAreYouSure: MatDialogRef<AreYouSureDialogComponent> | undefined;

  constructor(private api: ApiService,
              public data: DataService,
              public dialog: MatDialog) { }

  displayedColumns: string[] = ['year', 'mnemo', 'teacher', 'edit', 'remove'];
  dataSource = new MatTableDataSource<IClass>([]);

  ngOnInit(): void {

    this.api.getAllClasses().subscribe(res=>{
        this.data.classes = res
        this.dataSource.data = [...this.data.classes]
      },
      err=>{
        console.log(err);})
  }

  openAddDialog(){

   this.dialogRefClasses = this.dialog.open(DialogClassesComponent, {
     width: '40%',
     data: null
   })
    this.dialogRefClasses.afterClosed().subscribe(res=> {
      this.updateDataSource()
    })
  }

  openEditDialog(el: IClass){

    this.dialogRefClasses = this.dialog.open(DialogClassesComponent, {
      width: '40%',
      data: el
    })
    this.dialogRefClasses.afterClosed().subscribe(res=>{
      this.updateDataSource()
    })
  }

  remove(el: IClass){
    this.dialogAreYouSure = this.dialog.open(AreYouSureDialogComponent, {});
    this.dialogAreYouSure.afterClosed().subscribe(event => {
      if (event) {
        this.api.removeClass(el.id!).subscribe(res=> {
          for (let i = 0; i < this.data.classes.length; i++) {
            if (this.data.classes[i].id === el.id) {
              this.data.classes.splice(i, 1)
              break
            }
          }
          this.updateDataSource()
        },err=>{})
      }
    })

  }


  updateDataSource(){
    this.dataSource.data = [...this.data.classes]
  }

  getTeacherName(id:number) {
    for(let i=0;i<this.data.teachers.length;i++){
      if(id === this.data.teachers[i].id){
        return this.data.teachers[i].surname + ' ' + this.data.teachers[i].name + ' ' + this.data.teachers[i].patronymic
      }
    }
    return 'no teacher'
  }
}
