import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { LoginService } from '../services/database/login/login.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  headerFalseSetter: boolean = false;
  errorText: boolean =false;
  errorMessage:string='';
  login = {
    username: '',
    password: ''
  }
  constructor(private loginService: LoginService, private routerService: RouterService) { }

  ngOnInit(): void {
    this.loginService.getMessageSubject().subscribe(message => {
      if (message == "Success")
        this.routerService.routeToHomeRefresh();
      else{
          this.errorMessage=message.toString();
          this.errorText = true;
        }

    })
  }

  onSubmit() {
    console.log("login");
    if (this.login.username != '' && this.login.password != '') {
      this.loginService.loginUser(this.login.username, this.login.password);
    
      // .subscribe(
      //   (response:any)=>{
      //     this.loginService.loginUser(response.token);
      //   },error=>{
      //     console.log('error '+error);
      //   }
      // )
    }
    else {
      console.log('error ');
    }
  }
  onSignUp(){
    this.routerService.routeToSignup();

  }
}
