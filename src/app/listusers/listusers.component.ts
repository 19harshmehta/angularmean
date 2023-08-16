import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {

      apiResponce:any={}
      getData:any={}
      users:Array<any>=[]
      visible:boolean=false
      firstName:string=""
      email:string=""
      password:string=""
      uId:string=""

      constructor(private httpClient:HttpClient, private toastr:ToastrService, private router:Router)
      {
        this.getAllUsers()
      }

      getAllUsers()
      {
        console.log("List User Api Called");

        this.httpClient.get("https://demopass.onrender.com/getallusers").subscribe(resp=>{
          this.apiResponce = resp 
        
          this.users=this.apiResponce.data 
        },err=>{

        })
        
      }

      deleteUser(userId:string)
      {
        //alert("delete"+userId);
        this.httpClient.delete("https://demopass.onrender.com/deleteuser/"+userId).subscribe(resp=>{
          this.getAllUsers();
        this.toastr.success("","User Removed",{timeOut:3000})
        })
      }

      viewUser(userId:string)
      {
        this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId).subscribe(resp=>{
        //this.getAllUsers();
         
        // alert(this.users)
        this.toastr.success("","Data Retrived",{timeOut:3000})
        })
      }

      showDialog(userId:string){
        this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId).subscribe(resp=>{
        
        this.apiResponce = resp 

        this.firstName=this.apiResponce.data.firstName
        this.email=this.apiResponce.data.email
        this.password=this.apiResponce.data.password
        this.uId=userId
        // console.log(this.firstName);
        this.toastr.success("","Data Retrived",{timeOut:3000})
        this.visible = true 
        })
        
        
  
      }

      editUser(userId:string){
        this.router.navigateByUrl("/edituser/"+userId)
      }
}



