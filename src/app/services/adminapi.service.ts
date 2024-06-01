import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_url='https://employee-server-m2nf.onrender.com'

  authorization(){
    return this.http.get(`${this.server_url}/employee/1`)
  }

  addEmployeeApi(employee:employeeModel){
    return this.http.post(`${this.server_url}/employee`,employee)
  }

  getEmployeeApi(){
    return this.http.get(`${this.server_url}/employee`)
  }


  deleteEmployeeApi(id:string){
    return this.http.delete(`${this.server_url}/employee/${id}`)
  }

  
 viewEmployeeApi(id:string){
  return this.http.get(`${this.server_url}/employee/${id}`)
 }

 updateEmployeeApi(id:any,employee:any){
  return this.http.put(`${this.server_url}/employee/${id}`,employee)
 }

}
