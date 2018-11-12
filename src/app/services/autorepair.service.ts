import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AutorepairService {

  private host : string = 'http://localhost:8949/api/';
  private getCar : string = 'modelCar';
  private appoimtment : string = 'appoimtment';
  private discount : string = 'discount';
  constructor(private http: HttpClient) { }


   getModelCar(){
     return this.http.get(this.host + this.getCar);

   }
   saveAppointment(appointment: Appointment){ 
    return this.http.post(this.host + this.appoimtment, appointment);
  }
  getDiscounts(email: string){ 
    return this.http.get(this.host + this.discount + '?email=' + email );
  }
}
