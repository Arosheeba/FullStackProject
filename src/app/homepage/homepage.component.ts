import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  constructor(private router: Router,
    private loginservice: AutheticationService){}
  
    ngOnInit() {
       }
  confirmLogout(){
    /* these method is used to confirm logout by user */
    var status= confirm("Are You Sure!!Do you want to logout?");
     if (status==true) {
       this.router.navigate(['app-feedback-form']);
          }
     else{
      this.router.navigate(['app-homepage']);
     }
  }
  subscribe(){
    var status= confirm("You have Subscribed Us!!!");
     if (status==true) {
       this.router.navigate(['app-homepage']);
          }
}
}
