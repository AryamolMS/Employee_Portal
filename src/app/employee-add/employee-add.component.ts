import { Component } from '@angular/core';
import { employeeModel } from '../employee.model';
import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
/* variable to store the value from the input box which has the same model of employeeModel */
  employee:employeeModel={}

  constructor(private api:AdminapiService,private router:Router){}

  cancelEmployee(){
    this.employee={}
  }

  addEmployee(){
    console.log(this.employee);
    if(!this.employee.id || !this.employee.name || !this.employee.email || !this.employee.status){
      alert("Please fill this form completely")
    }
    else{this.api.addEmployeeApi(this.employee).subscribe({
      next:(res:employeeModel)=>{
        console.log(res);
        alert("Employee added successfully")
        this.employee={}
        this.router.navigateByUrl('employee-list')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    
  }
  }
  
}
