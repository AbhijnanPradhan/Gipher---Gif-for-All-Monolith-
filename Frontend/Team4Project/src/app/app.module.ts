import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';

import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    RecommendedComponent,
    DashboardComponent,
    ProfileComponent,
    FavoriteComponent,
    SearchResultComponent,
    CardDetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [
    RouterService,
    CanActivateRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
