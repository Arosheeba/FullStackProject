import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BusDetails } from './BusDetails';
@Injectable({
  providedIn: 'root'
})
export class BusDetailsService {
  
/*these methods are converting front end to backend by base url .
In backend there is a cross origin and search for the respective mappings*/
  private baseURL = "http://localhost:8080/BusManagement.com/busManagements";
  //localhost:8080/BusManagement.com/busManagements/3
  constructor(private httpClient: HttpClient) { }

  getBusDetailsList(): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}`);
  }

  createBusDetails(busDetails: BusDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,busDetails);
  }

  getBusDetailsById(busId: number): Observable<BusDetails>{
    return this.httpClient.get<BusDetails>(`${this.baseURL}/${busId}`);
  }

  updateBusDetails(busId: number,busDetails: BusDetails): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${busId}`, busDetails);
  }
  //localhost:4200/delete/5
  deleteBusDetails(busId: number): Observable<Object>{
    console.log(busId);
    return this.httpClient.delete(`${this.baseURL}/${busId}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findBystartingPoint(startingPoint: any): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}?startingPoint=${startingPoint}`);
  }
  findByAcBus(): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}/AcBus`);
  }
  findByNonAcBus(): Observable<BusDetails[]>{
    return this.httpClient.get<BusDetails[]>(`${this.baseURL}/NonAcBus`);
  }
  updateBusSeatsDetails(busId: number, busDetails: BusDetails): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${busId}`, busDetails);
  }

  }

