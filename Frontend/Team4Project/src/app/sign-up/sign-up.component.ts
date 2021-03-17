import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserInterface } from '../interfaces/UserInterface';
import { LoginService } from '../services/database/login/login.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  headerFalseSetter:boolean = false;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  gender = new FormControl();

  genderList: string[] = ['Female', 'Male', 'None', 'Rather not say'];

  user: any;
  errorText: string;
  constructor(private loginService: LoginService, private routerService: RouterService) {
    this.errorText = "";
  }


  ngOnInit(): void {
  }

  register() {
    console.log(this.gender.value);
    if (this.username.value === '')
      this.errorText = "Username cannot be blank";
    else if (this.password.value === '')
      this.errorText = "Password cannot be blank";
    else if (this.name.value === '')
      this.errorText = "Name cannot be blank";
    else if (this.dob.value === '')
      this.errorText = "Date of Birth cannot be blank";
    else if (this.password.value !== this.confirmPassword.value)
      this.errorText = "Password and Confirm Password not matching.";
    else if (this.email.value === '')
      this.errorText = "Email cannot be blank";
    else if (this.phone.value === '')
      this.errorText = "Phone number cannot be blank";
    if (this.gender.value === 'Gender' || this.gender.value === '' || !this.gender.value)
      this.errorText = "Please select your gender"
    else {
      this.errorText = "Registered Successfully!";
      let today = new Date(Date.now());
      this.user = new UserInterface()
      this.user.maker(this.username.value, this.name.value, this.email.value, this.gender.value, this.phone.value, this.dob.value, today, this.password.value);
      this.loginService.signUp(this.user).subscribe(
        data => {
          if (data.message == 'Success') {
            window.alert("Registration is successful");
            this.routerService.routeToLogin();
          } else {
            window.alert(data.message);
            this.errorText = data.message;
          }
        }, error => {
          window.alert("Please check your internet connection");
          this.errorText = error;
        }
      );
    }
  }
}
