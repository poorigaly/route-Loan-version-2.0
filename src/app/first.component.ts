import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SecondComponent } from './second.component'; 


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {


  isSubmitted = false;

  // Loan Names
  Loan: any = ['Personal', 'Vehicle', 'Gold']

  constructor(public fb: FormBuilder, router : Router) {}

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    LoanName: ['', [Validators.required]]
  })


  // Choose Loan using select dropdown
  changeLoan(e) {
    console.log(e.value)
    this.LoanName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get LoanName() {
    return this.registrationForm.get('LoanName');
  }

  /*########### Template Driven Form ###########*/
 /* onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
     // alert(JSON.stringify(this.registrationForm.value))
         this.router.navigate(['/Second']);
    }
  }*/
 onSubmit() {
         this.router.navigate(['/Second']);
    }
}




