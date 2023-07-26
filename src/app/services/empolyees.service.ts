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
export class EmpolyeesService {

  constructor(private http: HttpClient) { }

  public getUserFromApi(pageNumber: number) {
    return this.http.get<any>('https://reqres.in/api/users?page='+pageNumber);
  }
}
