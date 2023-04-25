import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authentication.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent {
  name: string='';
  email:string='';
  constructor(private router: Router,
    private loginservice: AutheticationService){}
  
    ngOnInit() {
       }
 /* contact(){
    var status= confirm("Thankyou for contacting us!!! ~we will reach you again~ ");
     if (status==true) {
       this.router.navigate(['app-homepage']);
          }
}*/
contact(){
if(this.name === ''|| this.email === ''){
  var status = confirm("It is mandatory to fill all the fields");
}
else{
var status = confirm("Thankyou for contacting us!!! ~we will reach you again~");
if(status==true){
  this.router.navigate(['app-homepage']);
}
}
}

}
