import { Component } from '@angular/core';
import { Employee, EmpolyeesService } from '../services/empolyees.service';
import { OnInit } from '@angular/core';

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

  constructor(private userServices: EmpolyeesService) {}

  ngOnInit(): void {
    this.getUser();
  }

  redirectToMail(email: string) {
    window.location.href = 'mailto:' + email;
  }

  getUser() {
    this.userServices.getUserFromApi(this.page).subscribe((result) => {
      this.employeeList = result.data;
      this.total = result.total;
      this.page = result.page;
      this.total_pages = result.total_pages;
      this.per_page = result.per_page;
      console.log(result);
    });
  }

  getPages() {
    return [...Array(this.total_pages).keys()].map((x) => x + 1);
  }

  goToPage(page: number) {
    console.log(page, 'running');

    this.page = page;
    this.getUser();
  }
}
