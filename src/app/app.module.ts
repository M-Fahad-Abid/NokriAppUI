import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { SignupCandidateComponent } from './Pages/user/signup-candidate/signup-candidate.component';
import { SignupEmployerComponent } from './Pages/user/signup-employer/signup-employer.component';
import { SignupAdminComponent } from './Pages/user/signup-admin/signup-admin.component';
import { LoginComponent } from './Pages/user/login/login.component';
import { JobsComponent } from './Pages/job/jobs/jobs.component';
import { MyJobsComponent } from './Pages/job/my-jobs/my-jobs.component';
import { JobDetailsComponent } from './Pages/job/job-details/job-details.component';
import { JobListingComponent } from './Pages/job/job-listing/job-listing.component';
import { ProfileComponent } from './Pages/credentials/profile/profile.component';
import { CreateNewJobComponent } from './Pages/job/create-new-job/create-new-job.component';
import { HeaderComponent } from './Pages/shared/header/header.component';
import { FooterComponent } from './Pages/shared/footer/footer.component';









//Mat
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ResumeComponent } from './Pages/credentials/resume/resume.component';
import { UpdateResumeComponent } from './Pages/credentials/update-resume/update-resume.component';
import { UpdateProfileComponent } from './Pages/credentials/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupCandidateComponent,
    SignupEmployerComponent,
    SignupAdminComponent,
    LoginComponent,
    JobsComponent,
    MyJobsComponent,
    JobDetailsComponent,
    JobListingComponent,
    ProfileComponent,
    CreateNewJobComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    UpdateResumeComponent,
    UpdateProfileComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

//Mat
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
