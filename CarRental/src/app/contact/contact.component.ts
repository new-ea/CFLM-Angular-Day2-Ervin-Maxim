import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customer = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required)    
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    let arrCustomer = [];
    if(this.customer.valid){
      var a = this.customer.value;
      alert(`Your Data:
            Name: ${a.firstName}
            Last Name: ${a.lastName}
            Email: ${a.email}
            City: ${a.city}
            Model: ${a.model}
            Date: ${a.days}
      `)
   }

  }

}
