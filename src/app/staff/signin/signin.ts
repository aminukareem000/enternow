import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class  Signin implements OnInit {
constructor (private fb: FormBuilder){}
signInForm! : FormGroup;


ngOnInit(): void {
    this.buildForm()
}
//  companyName = String('Enternow inc')

//  showName:boolean=true

 cars:string[]=['Volvo', 'Saab', 'Mercedes', 'Audi'];
 userCase: string = 'staff';



buildForm(){
  this.signInForm=this.fb.group({
    staffId : ['exampleStaffId', [Validators.required]],
    password : ['examplePassword',
      Validators.required, Validators.minLength(8)]
  } )
}


submitForm(){
  console.log(this.signInForm.value)
}}