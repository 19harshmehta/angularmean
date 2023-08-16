import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent 
{
    firstName = ""
    email = ""
    userId = ""
    data:any = {}

    constructor(private ar:ActivatedRoute, private httpClient:HttpClient, private toastr:ToastrService, private router:Router){
      this.userId = this.ar.snapshot.params["userId"]

      this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+this.userId).subscribe(resp=>{
        this.data = resp 
          if(this.data.rcode == -9){
            //navigate 
            this.toastr.error("","Please Try Again!!!",{timeOut:3000})
            this.router.navigateByUrl("/users")

          }else{ 

              this.firstName = this.data.data.firstName 
              this.email  = this.data.data.email 
          }
      })

    }


    updateUser()
    {

      const body = {
        firstName:this.firstName, // Replace with the actual first name
        email: this.email, // Replace with the actual email
        userId:this.userId // Replace with the actual user ID
      };
      this.httpClient.put("https://demopass.onrender.com/updateuser",body).subscribe(resp=>{
        this.data = resp 
        if(this.data.status == 200)
        {
          this.toastr.success("","Data Updated",{timeOut:3000})
          this.router.navigateByUrl("/users")  
        }
      })

      // console.log(this.firstName);
      // console.log(this.email);
      // console.log(this.userId);

    }
}


