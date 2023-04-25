import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authentication.service';
@Component({
  selector: 'app-logout-form',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.css']
})
export class LogoutFormComponent implements OnInit{
    constructor(
      private authenticationService: AutheticationService,
      private router: Router){
  
      }
       
      ngOnInit(){
       /* these method is used to confirm logout by user */
        var status= confirm("Are You Sure!!Do you want to logout?");
        if (status==true) {
          this.router.navigate(['app-feedback-form']);
             }
        else{
         this.router.navigate(['busDetails']);
        } 
}
/*confirmLogout(){
   these method is used to confirm logout by user 
  var status= confirm("Are You Sure!!Do you want to logout?");
   if (status==true) {
     this.router.navigate(['app-feedback-form']);
        }
   else{
    this.router.navigate(['busDetails']);
   }
}
this.authenticationService.logOut();
       alert("Thankyou !! Visit Again!!");
        this.router.navigate(['app-feedback-form']);*/

    
}
