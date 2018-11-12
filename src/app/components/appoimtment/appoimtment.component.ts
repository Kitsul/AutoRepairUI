import { Component, OnInit } from '@angular/core';
import { AutorepairService } from 'src/app/services/autorepair.service';
import {FormGroup, EmailValidator, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms'
import { error } from 'util';
import { Appointment } from 'src/app/models/appointment';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-appoimtment',
  templateUrl: './appoimtment.component.html',
  styleUrls: ['./appoimtment.component.css']
})
export class AppoimtmentComponent implements OnInit {
  public appoimtmentForm: FormGroup;
  public isValid: boolean =  true;
  public carModel: Array<string>;
  private appointment: Appointment;

    services = [
    { id: '1', value:'Transmission'},
    { id: '2', value:'Vehicle Maintenance'},
    { id: '3', value:'Vehicle Rapair'},
    { id: '4', value:'Other'}
];
  constructor(
    private _autorepairService: AutorepairService,
    private appoimtmentFormGroup: FormBuilder) {
     }

  ngOnInit() {


    this.appoimtmentForm = this.appoimtmentFormGroup.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      secondName: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      dateStart: ['',Validators.required],
      timeStart: ['',Validators.required],
      dateEnd: [''],
      timeEnd: [''],
      yearOfCar: [''],
      carType: [''],
      message: [''],
      transmission:[''],
      vehicleMaintance:[''],
      vehicleRepair:[''],
      other:[''],
    });

    this.getModelsCar();
  }
  onSubmit(): void{
    this.appointment = new Appointment();
    this.appointment.car = new Car();
    this.appointment.user = new User();
    this.appointment.startDate = this.appoimtmentForm.controls.dateStart.value + ' ' + this.appoimtmentForm.controls.timeStart.value;
    if(this.appoimtmentForm.controls.dateEnd.value != null && this.appoimtmentForm.controls.timeEnd.value){
      this.appointment.endDate = this.appoimtmentForm.controls.dateEnd.value + ' ' +  this.appoimtmentForm.controls.timeEnd.value;
    }
    this.appointment.message = this.appoimtmentForm.controls.message.value;
    this.appointment.car.year = this.appoimtmentForm.controls.yearOfCar.value
    this.appointment.car.carModel = this.appoimtmentForm.controls.carType.value

    this.appointment.user.firstName = this.appoimtmentForm.controls.firstName.value;
    this.appointment.user.secondName = this.appoimtmentForm.controls.secondName.value;
    this.appointment.user.email = this.appoimtmentForm.controls.email.value;
    this.appointment.user.phoneNumber = this.appoimtmentForm.controls.phoneNumber.value;
    this.appointment.servicesType = new Array();
    
    if(this.appoimtmentForm.controls.transmission.value)
    {
      this.appointment.servicesType.push('Transmission');
    }
    if(this.appoimtmentForm.controls.vehicleMaintance.value)
    {
      this.appointment.servicesType.push('Vehicle Maintance');
    }
    if(this.appoimtmentForm.controls.vehicleRepair.value)
    {
      this.appointment.servicesType.push('Vehicle Repair');
    }
    if(this.appoimtmentForm.controls.other.value)
    {
      this.appointment.servicesType.push('Other');
    }
    this._autorepairService.saveAppointment(this.appointment).subscribe( 
      responce => console.log(responce)
    )
    this.appoimtmentForm.reset();
  }

  private getModelsCar()
  {
      this._autorepairService.getModelCar().subscribe(
            (responce: Array<Car>) => {
                this.carModel  = responce.map(car => car.carModel);
              }
  )};
  onClear() {
    this.appoimtmentForm.reset();
    
  }
}
