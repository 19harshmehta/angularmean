import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<any>
  {
    return this.httpClient.get("https://demopass.onrender.com/getallusers");
  }

  deleteUser(userId:string):Observable<any>
  {
    return this.httpClient.delete("https://demopass.onrender.com/deleteuser/"+userId)
  }

  viewUser(userId:string):Observable<any>
  {
    return this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId)
  }

  showDialog(userId:string):Observable<any>
  {
    return this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId)
  }
       
}
