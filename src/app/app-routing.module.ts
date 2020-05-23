import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './components/signup/signup.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';

const routes: Routes = [
    { path: 'signup', component: SignupComponent }
];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'contact',          component: ContactPageComponent },
//   // { path: 'user-profile',     component: ProfileComponent },
//   { path: 'signup',           component: SignupComponent }
//   // { path: 'landing',          component: LandingComponent },
//   // { path: 'nucleoicons',      component: NucleoiconsComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    SignupComponent
];
