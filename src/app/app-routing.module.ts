import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SignupEmployerComponent } from './Pages/user/signup-employer/signup-employer.component';
import { SignupCandidateComponent } from './Pages/user/signup-candidate/signup-candidate.component';
import { SignupAdminComponent } from './Pages/user/signup-admin/signup-admin.component';
import { LoginComponent } from './Pages/user/login/login.component';
import { MyJobsComponent } from './Pages/job/my-jobs/my-jobs.component';
import { JobsComponent } from './Pages/job/jobs/jobs.component';
import { JobListingComponent } from './Pages/job/job-listing/job-listing.component';
import { JobDetailsComponent } from './Pages/job/job-details/job-details.component';
import { CreateNewJobComponent } from './Pages/job/create-new-job/create-new-job.component';
import { ResumeComponent } from './Pages/credentials/resume/resume.component';
import { UpdateResumeComponent } from './Pages/credentials/update-resume/update-resume.component';
import { ProfileComponent } from './Pages/credentials/profile/profile.component';
import { UpdateProfileComponent } from './Pages/credentials/update-profile/update-profile.component';

const routes: Routes = [
//Default Route  
{
  path: '',
  redirectTo:'home',
  pathMatch:'full'
},

//Authentication  
{
  path:'home',
  component:HomeComponent
},
{
  path:'employer-signup',
  component:SignupEmployerComponent
},
{
  path:'candidate-signup',
  component:SignupCandidateComponent
},
{
  path:'admin-signup',
  component:SignupAdminComponent
},
{
  path:'login',
  component:LoginComponent
},

//Jobs
{
  path:'my-jobs',
  component:MyJobsComponent
},
{
  path:'jobs',
  component:JobsComponent
},
{
  path:'job-listing',
  component:JobListingComponent
},
{
  path:'job-detail',
  component:JobDetailsComponent
},
{
  path:'create-new-job',
  component:CreateNewJobComponent
},

//Resume & Profile
{
  path:'resume',
  component: ResumeComponent
},

{
  path:'update_resume',
  component: UpdateResumeComponent
},

{
  path:'profile',
  component: ProfileComponent
},

{
  path:'update-profile',
  component: UpdateProfileComponent
},



//Wild Card Route
{
  path:'**',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
