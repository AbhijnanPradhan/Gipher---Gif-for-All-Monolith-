import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserInterface } from '../interfaces/UserInterface';
import { LoginService } from '../services/database/login/login.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  headerFalseSetter: boolean = false;
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
  constructor(private loginService: LoginService, private routerService: RouterService, private snackbar: MatSnackBar) {
    this.errorText = "";
  }


  ngOnInit(): void {
  }

  register() {
    if (this.username.value === "")
      this.showErrorMessage("Username cannot be blank");
    else if (this.password.value === '')
      this.showErrorMessage("Password cannot be blank");
    else if (this.name.value === '')
      this.showErrorMessage("Name cannot be blank");
    else if (this.dob.value === '')
      this.showErrorMessage("Date of Birth cannot be blank");
    else if (this.password.value !== this.confirmPassword.value)
      this.showErrorMessage("Password and Confirm Password not matching.");
    else if (this.email.value === '')
      this.showErrorMessage("Email cannot be blank");
    else if (this.phone.value === '')
      this.showErrorMessage("Phone number cannot be blank");
    else if (this.gender.value === 'Gender' || this.gender.value === '' || !this.gender.value)
      this.showErrorMessage("Please select your gender");
    else {
      let today = new Date(Date.now());
      this.user = new UserInterface();
      this.user.maker(this.username.value, this.name.value, this.email.value, this.gender.value, this.phone.value, this.dob.value, today, this.password.value);
      this.loginService.signUp(this.user).subscribe(
        data => {
          if (data.message == 'Success') {
            this.showErrorMessage("Registration is successful");
            this.routerService.routeToLogin();
          } else {
            this.showErrorMessage("Something went wrong");
            this.errorText = data.message;
          }
        }, error => {
          this.showErrorMessage("Please check your internet connection");
          this.errorText = error;
        }
      );
    }
  }

  showErrorMessage(message: string) {
    this.snackbar.open(message, undefined, {
      duration: 2000,
    });
  }
}
