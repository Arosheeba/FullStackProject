import { Component, OnInit} from '@angular/core';
import { BusDetailsService } from '../bus-details.service';
import { BusDetails } from '../BusDetails';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-bus-details',
  templateUrl: './update-bus-details.component.html',
  styleUrls: ['./update-bus-details.component.css']
})
export class UpdateBusDetailsComponent implements OnInit{
  busId: number = 0;
  startingPoint: string = "";
    driverName: string = "";
    endingPoint: string = "";
    driverNumber:  number = 0;
    
    busNumber: string = "";
    busType: string = "";
  busDetails: BusDetails = new BusDetails();
  constructor(private busDetailsService: BusDetailsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.busId = this.route.snapshot.params['busId'];//busId parameter

    this.busDetailsService.getBusDetailsById(this.busId).subscribe(data => {
      this. busDetails = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.busDetailsService.updateBusDetails(this.busId, this. busDetails).subscribe( data =>{
      this.goToBusDetailsList();
    }
    , error => console.log(error));
  }

  goToBusDetailsList(){
    
    this.router.navigate(['/busDetails']);
  }
  update(){
    alert("Updated Successfully!!!");
    this.router.navigate(['app-busDetails']);
  }
 /* requiredValue(){
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
  
}

