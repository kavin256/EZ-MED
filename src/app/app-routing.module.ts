import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home',             component: ComponentsComponent },
//   { path: 'user-profile',     component: ProfileComponent },
//   { path: 'signup',           component: SignupComponent },
//   { path: 'landing',          component: LandingComponent },
//   { path: 'nucleoicons',      component: NucleoiconsComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
