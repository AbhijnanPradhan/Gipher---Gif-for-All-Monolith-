import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faSearch,faUser,faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/database/login/login.service';
import { ProfileService } from '../services/database/profile/profile.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  outputs:[`eventSearchButtonClicked`]
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  faFav = faHeart;
  faStar = faStar;
  searchString: string = '';
  userName: String = '';
  @Input() searchEnabler: boolean = true;
  @Input() profileEnabler:boolean = true;
  @Input() favoriteEnabler: boolean = true;
  @Input() recommendEnabler:boolean = true;
  @Input() homeEnabler:boolean = true;
  eventSearchButtonClicked = new EventEmitter<string>();
  searchClicked(){
    console.log('header boi:'+this.searchString);
    this.eventSearchButtonClicked.emit(this.searchString);
  }
  constructor(private router:RouterService, private loginService: LoginService,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.getBehaviourSubject()
    .subscribe(data=>{
      console.log("usernameORerror",data);
      this.userName = data.name;
    });
    this.profileService.getUserDetails();
  }
  nextPage(param:string){
    switch (param) {
      case 'logout':
        this.loginService.logOut();
        this.router.routeToLogin();
        break;
      case 'user':
        this.router.routeToProfile();
        break;
      case 'favs':
        this.router.routeToFavorites();
        break;
      case 'home':
        if(this.homeEnabler)
          this.router.routeToHome();
        else
          this.router.routeToSignup();
        break;
      case 'recom':
        this.router.routeToRecommended();
        break;
      default:
        break;
    }
  }
  onKey(event: any) { // without type info
    if(event.key == 'Enter')
      this.searchClicked();
  }
}
