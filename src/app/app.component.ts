import { Component, OnInit } from '@angular/core';
import { AutheticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* App component is the head component of all sub components. here we are giving the title of our project*/
export class AppComponent implements OnInit{
  title = 'Bus Management' ;
  router:any;
 constructor(public loginService:AutheticationService) { }
  ngOnInit() {
  }
  }
 



