import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-bus-details',
  templateUrl: './create-bus-details.component.html',
  styleUrls: ['./create-bus-details.component.css']
})
export class CreateBusDetailsComponent implements OnInit{
  busDetails: BusDetails = new BusDetails();
  startingPoint='';
    driverName = '';
    endingPoint = '';
    driverNumber = 0;
    busNumber = '';
    busType = '';
    noOfSeats=0;
    costPerSeats=0;

  constructor(private busDetailsService: BusDetailsService ,
    private router: Router) { }

  ngOnInit(): void {
  }
  /*requiredValue(){
    if(this.startingPoint === '' || this.driverName === '' || this.endingPoint === '' || this.driverNumber === 0||
     this.busId === 0|| this.busNumber === ''|| this.busType === '') {
      var status= confirm("Please fill all mandatory fields");
    }
   
   else{
    var status= confirm("Created Successfully");
    if (status==true) {
      this.router.navigate(['busDetails']);
         }
   }
  }*/

  saveBusDetails(){
    this.busDetailsService.createBusDetails(this.busDetails).subscribe( data =>{
      console.log(data);
      this.goToBusDetailsList();
    },
    error => console.log(error));
  }

  goToBusDetailsList(){
    this.router.navigate(['busDetails']);
  }

  onSubmit(){
    console.log(this.busDetails);
    this.saveBusDetails();
  }
  /*onSubmit(){
    if(this.busDetails.startingPoint === '' || this.busDetails.driverName === '' || this.busDetails.endingPoint === '' || this.busDetails.driverNumber === 0||
   this.busDetails.busNumber === ''|| this.busDetails.busType === ''|| this.busDetails.noOfSeats === 0|| this.busDetails.costPerSeats === 0) {
      let status = alert("It is mandatory to fill all the fields");
    }
    else{
      console.log(this.busDetails)
      this.saveBusDetails();
    }
  }
  confirmCreate(){
    var status = confirm("Inserted Successfully");
    if(status==true){
      console.log("created");
      this.goToBusDetailsList();
  }
  else{
    this.router.navigate(['busDetails'])
  }
  }*/
 
  create(){
    alert("Created Successfully!!!");
    this.router.navigate(['app-busDetails']);
  }
}

