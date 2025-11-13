import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class  Login implements OnInit {
constructor (private fb: FormBuilder){}
logInForm! : FormGroup;


ngOnInit(): void {
    this.buildForm()
}


buildForm(){
  this.logInForm=this.fb.group({
    staffId : ['exampleStaffId', [Validators.required]],
    password : ['examplePassword',
      Validators.required, Validators.minLength(8)]
  } )
}

submitForm(){
  console.log(this.logInForm.value)
}
}
