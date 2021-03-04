import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path:'error', component:PageNotFoundComponent},
  {path:'profile', component: ProfileComponent, canActivate: [CanActivateRouteGuard]},
  {path:'favs', component: FavoriteComponent, canActivate: [CanActivateRouteGuard]},
  {
    path:'home', component: DashboardComponent, canActivate: [CanActivateRouteGuard],
    children:[
      // all components like searchResult, recommended,etc
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
