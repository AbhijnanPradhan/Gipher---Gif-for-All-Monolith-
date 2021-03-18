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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import { CommentsComponent } from './comments/comments.component';
import { RecommendedService } from './services/database/recommended/recommended.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { GifDetailsService } from './services/database/gif_details/gif-details.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    CardComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [
    RouterService,
    CanActivateRouteGuard,
    RecommendedService,
    GifDetailsService,
    MatSnackBar,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
