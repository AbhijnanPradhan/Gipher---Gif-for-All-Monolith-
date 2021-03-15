import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showSearchBar:boolean=false;
  showProfileLink: boolean = false;
  innerWidth:number = 0;
  innerHeight:number = 0;
  coverImgUrl:string = '';
  profileAvatar: string = '';
  user:UserInterface=new UserInterface();
  userAge: number = Math.floor(((Date.now()-this.user.dob.getTime())/(1000*60*60*24))/365.25);
  months:Array<string> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = Math.floor(window.innerWidth);
    this.innerHeight = Math.floor((window.innerHeight)/4) ;
    this.coverImgUrl = "https://picsum.photos/"+this.innerWidth+"/"+this.innerHeight+"";
    this.profileAvatar = '../../assets/Images/avatars/hacker.png';
  }
}
