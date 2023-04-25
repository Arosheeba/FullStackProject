import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';

@Component({
  selector: 'app-bus-info',
  templateUrl: './bus-info.component.html',
  styleUrls: ['./bus-info.component.css']
})
export class BusInfoComponent implements OnInit {
  busId: number = 0;
  busDetails: any = [];
  constructor(private route: ActivatedRoute, private busDetailsService: BusDetailsService) { }
/* Here we are implementing ng onit method for view by id and it moves to get busdetails by id 
ng onitmethod pass default constructor */
  ngOnInit(): void {
    this.busId = this.route.snapshot.params['busId'];

    this.busDetails = new BusDetails();
    this.busDetailsService.getBusDetailsById(this.busId).subscribe( data => {
      this.busDetails= data;
    });
  }

  

}

