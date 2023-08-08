import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {

      apiResponce:any={}
      users:Array<any>=[]

      constructor(private httpClient:HttpClient)
      {
        this.getAllUsers()
      }

      getAllUsers(){
        console.log("List User Api Called");

        this.httpClient.get("https://demopass.onrender.com/getallusers").subscribe(resp=>{
          this.apiResponce = resp 
        
          this.users=this.apiResponce.data 
        },err=>{

        })
        
      }
}
