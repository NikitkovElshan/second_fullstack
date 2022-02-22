import {Component, OnInit} from '@angular/core';
import {ApiService} from "./shared/services/api.service";
import {DataService} from "./shared/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';

  constructor(private api: ApiService,
              private data: DataService) {}

  ngOnInit(): void {
    this.api.getAllClasses().subscribe(res=>{
        this.data.classes = res
      },
        err=>{
      console.log(err);})

    this.api.getAllTeachers().subscribe(res=>{
        this.data.teachers = res
      },
      err=>{
        console.log(err);})
  }
}
