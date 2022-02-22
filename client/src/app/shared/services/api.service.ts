import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IClass, IStudent, ITeacher} from '../interfaces/interface'


@Injectable({
  providedIn: "root"
})

export class ApiService {

  constructor(private http: HttpClient ) {}

  addStudent(data: IStudent) : Observable<any> {
    return this.http.post<any>(`/api/student`, data)
  }
  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>('/api/student')
  }
  editStudent(data: IStudent) : Observable<any> {
    return this.http.put<any>(`/api/student`, data)
  }
  removeStudent(id: number) : Observable<any> {
    return this.http.delete<any>(`/api/student/${id}`)
  }
  //====================================================//

  addTeacher(data: ITeacher) : Observable<any> {
    return this.http.post<any>(`/api/teacher`, data)
  }
  getAllTeachers(): Observable<ITeacher[]> {
    return this.http.get<ITeacher[]>('/api/teacher')
  }

  editTeacher(data: ITeacher) : Observable<any> {
    return this.http.put<any>(`/api/teacher`, data)
  }

  removeTeachers(id: number): Observable<any> {
    return this.http.delete<any>(`/api/teacher/${id}`)
  }
  //==================================================//
  addClass(data: IClass) : Observable<any> {
    console.log(data);
    return this.http.post<any>(`/api/class`, data)
  }

  getAllClasses(): Observable<IClass[]> {
    return this.http.get<IClass[]>('/api/class')
  }

  editClass(data: IClass) : Observable<any> {
    return this.http.put<any>(`/api/class`, data)
  }

  removeClass(id: number): Observable<any> {
    return this.http.delete<any>(`/api/class/${id}`)
  }

}

