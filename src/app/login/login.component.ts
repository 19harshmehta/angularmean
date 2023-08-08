import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  
  email : String=""
  password : String=""
  data : any = {}
  
  constructor(private toastr:ToastrService,private httpClient:HttpClient)
  {

  
  }
    login()
    {
      console.log("Email => ",this.email);
      console.log("Password => ",this.password);
      let data = {
        "email":this.email,
        "password":this.password
      }

      this.httpClient.post("https://demopass.onrender.com/public/login",data).subscribe(resp=>{
      this.data = resp
      if(this.data.rcode== -9){
        this.toastr.error(this.data.msg,"",{timeOut:3000})
      }else if(this.data.rcode == 200){
        this.toastr.success("Login done","",{timeOut:3000})
      }
      },err=>{
  
      })
      

    }
}
