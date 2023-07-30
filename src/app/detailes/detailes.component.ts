import { ActivatedRoute } from '@angular/router';
import { Employee, EmpolyeeService } from '../services/empolyee.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailsComponent implements OnInit {
  employee!: Employee;
  empId: number;

  constructor(private empService: EmpolyeeService, private route : ActivatedRoute) {
    this.empId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.empService.getEmployeeById(this.empId).subscribe(emp => {
      this.employee = emp.data;
      console.log(`employee - `+this.empId, emp);
    });
  }



}
