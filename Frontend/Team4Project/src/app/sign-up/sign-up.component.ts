import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserInterface } from  '../interfaces/UserInterface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  user:any;
  errorText: string;
  constructor() {
    this.errorText = "";
  }


  ngOnInit(): void {
  }

  register() {
    console.log(this.username.value, this.password.value);
    if (this.username.value === '')
      this.errorText = "Username cannot be blank";
    else if (this.password.value === '')
      this.errorText = "Password cannot be blank";
    else if (this.name.value === '')
      this.errorText = "Name cannot be blank";
    else if (this.dob.value === '')
      this.errorText = "Date of Birth cannot be blank";
    else if(this.password.value !== this.confirmPassword.value)
      this.errorText = "Password and Confirm Password not matching."
    else{
      this.errorText = "Registered Successfully!";
      this.user = new UserInterface().maker(this.name.value,this.username.value,this.password.value,this.dob.value);
    }
  }
}
