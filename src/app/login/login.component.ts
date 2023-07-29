import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    x:number = 100

    email:String=""
    password:String=""
    login()
    {
      console.log("Email => ",this.email);
      console.log("Password => ",this.password);
      
      
    }
}
