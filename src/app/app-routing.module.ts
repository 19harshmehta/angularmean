import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListusersComponent } from './listusers/listusers.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"users",component:ListusersComponent},
  {path:"edituser/:userId",component:EdituserComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
