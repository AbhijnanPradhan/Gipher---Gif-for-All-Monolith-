import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login={
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("login");
    if(this.login.username!='' && this.login.password!=''){

    }
    else{
    
    }

  }

}
