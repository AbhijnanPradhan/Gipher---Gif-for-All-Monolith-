import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
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
    else 
      this.errorText = "Registered Successfully!";
  }
}
