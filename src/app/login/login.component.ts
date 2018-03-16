import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:string;
  invalidUser:boolean;
  constructor(private router: Router) {
    
   }

  ngOnInit() {
    this.invalidUser = false;
  }
  
  submitFields(){
    // const userObj = {
    //   name:this.name,
    //   password:this.password
    // }
    console.log(this);
    if(this.name && this.password){
      if(this.name=='hi' && this.password=='hi')
      this.router.navigate(['home']);
      else{
        this.invalidUser = true;
      }
    }
  }
  resetFields(){
    this.invalidUser = false;
  }
}
