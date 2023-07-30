
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  email: string,
  avatar: string,
  first_name: string,
  last_name: string,
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(pageNumber: number) {
    return this.http.get<any>('https://reqres.in/api/users?page='+pageNumber);
  }

  public getEmployeeById(empId: number) {
    return this.http.get<any>('https://reqres.in/api/users/'+empId);
  }
}
