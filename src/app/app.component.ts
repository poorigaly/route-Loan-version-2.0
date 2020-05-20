import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
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
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
     // alert(JSON.stringify(this.registrationForm.value))
         this.router.navigate(['/search']);
    }

  }



}




