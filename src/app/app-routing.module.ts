import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';

/* there are the path for the sub components and we are importing the respective components*/
const routes: Routes = [
  {path: 'busDetails', component: BusDetailsListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-bus-details', component: CreateBusDetailsComponent,canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'app-login-form', pathMatch: 'full'},/*this path can be redirect to login page */
  {path: 'updateBusDetails/:busId', component: UpdateBusDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'busDetails/:busId', component:  BusInfoComponent,canActivate:[AuthGaurdService]},
  {path: 'app-login-form', component: LoginFormComponent},
  {path: 'app-registration-form', component: RegistrationFormComponent },
  {path: 'app-profile-card', component: ProfileCardComponent},
  {path: 'app-feedback-form', component: FeedbackFormComponent },
  {path: 'app-contact-us-form', component: ContactUsFormComponent},
  {path: 'app-homepage', component: HomepageComponent },
  {path: 'app-logout-form', component: LogoutFormComponent,canActivate:[AuthGaurdService]},
  {path:'app-about-us',component:AboutUsComponent},
  {path:'app-bus-seats/:busId',component:BusSeatsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


