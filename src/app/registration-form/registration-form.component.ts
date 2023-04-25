import { Component , OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AutheticationService } from '../authentication.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent  implements OnInit {
  name = '';
  email = '';
  password = '';
  phoneNumber = 0;
  invalidLogin = false
  constructor(private router: Router,
    private loginservice: AutheticationService){}
  
    ngOnInit() {
       }
       checkLogin(){
        if(this.loginservice.authenticate(this.name,this.password)){
          this.router.navigate(['busDetails']);
          console.log("navigate...");
          this.invalidLogin = false;
        }
        else 
        this.invalidLogin = true;
       }
        /* this method is used to required for username,password,email and confirm password*/
       requiredValue(){
        if(this.name === '' || this.email === '' || this.password === '' || this.phoneNumber === 0) {
          var status = confirm("Please fill all mandatory fields");
        }
       
       else{
        var status= confirm("Registered Successfully");
        if (status==true) {
          this.router.navigate(['busDetails']);
             }
       }
      }
}

