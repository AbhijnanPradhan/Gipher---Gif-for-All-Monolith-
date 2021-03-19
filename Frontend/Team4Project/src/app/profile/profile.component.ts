import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface'
import { ProfileService } from '../services/database/profile/profile.service';

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
  // profileAvatar: string = '';
  user:UserInterface=new UserInterface();
  userAge: number = 0;
  months:Array<string> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.innerWidth = Math.floor(window.innerWidth);
    this.innerHeight = Math.floor((window.innerHeight)*70/100) ;
    this.coverImgUrl = "https://picsum.photos/"+this.innerWidth+"/"+this.innerHeight+"";
    // this.profileAvatar = '../../assets/Images/avatars/hacker.png';

    this.profileService.getBehaviourSubject()
      .subscribe(data => {
        // console.log('get result', data);
        this.user = data;
        this.user.dateOfBirth = new Date(data.dateOfBirth);
        this.user.dateAdded = new Date(data.dateAdded);
        this.userAge = Math.floor(((Date.now()-this.user.dateOfBirth.getTime())/(1000*60*60*24))/365.25);

        // console.log('UserData', this.user);
        // console.log("get date",this.user.dateOfBirth.getDate(),);
        // console.log("get data type of",data.dateOfBirth.getUTCDate());

      });
    this.profileService.getUserDetails();
  }
  
}
