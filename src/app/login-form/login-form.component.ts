import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

  export class LoginFormComponent implements OnInit{
    username = '';
    password = '';
    invalidLogin = false;
    message: string | undefined;
    constructor(private router: Router,
      private loginservice: AutheticationService){}
    
      ngOnInit() {
         }
         checkLogin(){
          if(this.loginservice.authenticate(this.username,this.password)){
            this.router.navigate(['busDetails']);
            console.log("navigate...");
            this.invalidLogin = false;
            alert("Logged in Successfully")
          }
          else 
          this.invalidLogin = true;
         this.message = 'Please Enter the correct credentials for Username and Password';
         }
        
    }
    