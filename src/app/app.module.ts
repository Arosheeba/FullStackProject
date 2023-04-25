import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';
import { AboutUsComponent } from './about-us/about-us.component';


/* we are importing head component and the respective sub components*/
@NgModule({
  declarations: [
    AppComponent,
    CreateBusDetailsComponent,
    BusInfoComponent,
    BusDetailsListComponent,
    UpdateBusDetailsComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    LogoutFormComponent,
    FeedbackFormComponent,
    ProfileCardComponent,
    ContactUsFormComponent,
    HomepageComponent,
    BusSeatsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
