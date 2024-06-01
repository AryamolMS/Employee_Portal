import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  allEmployee:employeeModel[]=[]

  searchKey:string=""
/* pagenation */
  p: number = 1;

  constructor(private api:AdminapiService){}

  ngOnInit(): void {
    this.getEmployee()
  }

  getEmployee(){
    this.api.getEmployeeApi().subscribe({
      next:(res:any)=>{
        this.allEmployee=res
        console.log(this.allEmployee);
          

      },
      error:(err:any)=>{
console.log(err);

      }
    })
  }


  deleteEmployee(id:any){
    this.api.deleteEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getEmployee() 
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })
  }

  generatePdf(){
    const pdf =new jsPDF()

    let head = [['id','Employee name','email','status']]

    let body : any = []

    this.allEmployee.forEach((item)=>{
      body.push([item.id,item.name,item.email,item.status])
    })

    pdf.setFontSize(16)
    pdf.text('Employee details',10,10)
    autoTable(pdf,{head,body})

    pdf.output('dataurlnewwindow')

    pdf.save('Employee.pdf')
  }
  
}
