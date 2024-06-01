import { Component } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email:string=""
  password:string=""

  constructor(private api:AdminapiService , private router:Router){}

  login(){
    if(!this.email || !this.password){
      alert("Please fill this form")
    }
    else{
      this.api.authorization().subscribe({
        next:(res:any)=>{
          const {email,password} = res
          if(email == this.email && password == this.password){
            alert("Login Successfull")
          }
          this.router.navigateByUrl('dashboard')
        },
        error:(res:any)=>{
          alert('Invalid email or password')
        }
      })
    }
  }
}
