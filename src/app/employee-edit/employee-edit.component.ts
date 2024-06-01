import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  employee:employeeModel={}
  sampleemployee:any=""


  constructor(private route:ActivatedRoute, private api:AdminapiService,private router:Router){}


  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      /* console.log(res.id); */
      const {id} = res
      this.viewEmployee(id)
    })
  }

  viewEmployee(id:any){
    this.api.viewEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.employee=res
        this.sampleemployee=res.id
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })
  }

  updateEmployee(id:any){
    this.api.updateEmployeeApi(id,this.employee).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert('Updated successfully')
        this.router.navigateByUrl('/employee-list')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  
  cancelbutton(){
    this.viewEmployee(this.sampleemployee)
  }
}
