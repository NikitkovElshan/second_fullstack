import {Injectable} from "@angular/core";
import {IClass, IStudent, ITeacher} from "../interfaces/interface";




@Injectable({
  providedIn: "root"
})

export class DataService {

  students: IStudent[] = []
  teachers: ITeacher[] = []
  classes: IClass[] = []

  constructor( ) {
  }

}
