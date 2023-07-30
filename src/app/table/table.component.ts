import { Component } from '@angular/core';
import { Employee, EmpolyeeService } from '../services/empolyee.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public employeeList: Employee[] = [];
  public total = 0;
  public page = 1;
  public per_page = 6;
  public total_pages = 1;

  constructor(public userServices: EmpolyeeService,
    private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  redirectToMail(email: string) {
    window.location.href = 'mailto:' + email;
  }

  getUsers() {
    this.userServices.getEmployees(this.page).subscribe((result) => {
      this.employeeList = result.data;
      this.total = result.total;
      this.page = result.page;
      this.total_pages = result.total_pages;
      this.per_page = result.per_page;
    });
  }

  getPages() {
    return [...Array(this.total_pages).keys()].map((x) => x + 1);
  }

  goToPage(page: number) {
    console.log(page, 'running');

    this.page = page;
    this.getUsers();
  }

  pageOfDetails(id : number) {
    this.router.navigate(['/details/'+id]);
  }
}
