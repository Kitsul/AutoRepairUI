import { Component, OnInit } from '@angular/core';
import { AutorepairService } from 'src/app/services/autorepair.service';
import { FormControl, Validators, RequiredValidator, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  form: FormGroup;
  
  isValidFormSubmitted = null;
  

  constructor(private _autorepairService: AutorepairService,
              private formBuilder:FormBuilder,) { }
ngOnInit() {
  this.form = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
   });
}

  onSend()
  {
    var emailValue = this.form.controls.email.value;
       this._autorepairService.getDiscounts(emailValue).subscribe(
            (responce: Array<string>) => {
              this.form.reset();   
              }
  )};
}
