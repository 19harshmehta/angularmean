import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
{
  firstname:String=""
  email:String=""
  password:String=""
  constructor(private toastr: ToastrService,private router:Router, private httpClient:HttpClient) {}
  signup() 
  {
    console.log(this.firstname);
    console.log(this.email);
    console.log(this.password);

    var data={
        "email":this.email,
        "firstName":this.firstname,
        "password":this.password
      }
      //db save-> api
      this.httpClient.post("https://demopass.onrender.com/signup",data).subscribe(resp=>{
        console.log(resp)
      },error=>{
        console.log(error)
      })

      this.toastr.success('Sign Up Done',"",{timeOut:3000});
      this.router.navigateByUrl("login")


    
  }
}
