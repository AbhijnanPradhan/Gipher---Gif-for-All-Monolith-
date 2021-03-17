import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { LoginService } from '../services/database/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  headerFalseSetter:boolean = false;
  login={
    username:'',
    password:''
  }
  constructor(private loginService :LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("login");
    if(this.login.username!='' && this.login.password!=''){
      this.loginService.tokenGenerator(this.login).subscribe(
        (response:any)=>{
          this.loginService.loginUser(response.token);
        },error=>{
          console.log('error '+error);
        }
      )
    }
    else{
      console.log('error ');
    }

  }

}
