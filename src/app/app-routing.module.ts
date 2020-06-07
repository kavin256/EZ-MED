import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './components/signup/signup.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';

const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'index', component: LandingPageComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
