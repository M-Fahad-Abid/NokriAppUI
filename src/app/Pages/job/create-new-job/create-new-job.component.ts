import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit  {
  constructor(private jobservice: JobService) {}

  employerId: any ;

  // dataCheck = sessionStorage.getItem('Data');


  ngOnInit(): void {
    const dataCheck: string | null = sessionStorage.getItem('Data');
    if (dataCheck)
     {
      const sessionData = JSON.parse(dataCheck);
      this.employerId = sessionData && sessionData.employer ? sessionData.employer.id : null;
    } 
    else
     {
      console.error("Data not found in session storage.");
    }
  }

  CreateJobObj: any = {
    "id": 0,
    "title": "",
    "description": "",
    "postedDate": new Date().toISOString(),
    "deadline": new Date().toISOString(),
    "location": "",
    "skill_Required_1": "",
    "skill_Required_2": "",
    "skill_Required_3": "",
    "expected_Salary": "",
    "employerId": null
  };

  CreateJob() {
    // Check if employerId is null before assigning it to CreateJobObj
    if (this.employerId !== null) {
      this.CreateJobObj.employerId = this.employerId;

      // Call the service method to create the job
      this.jobservice.CreateJob(this.CreateJobObj, this.employerId).subscribe((res: any) => {});

      console.log("Job Data", this.CreateJobObj);
      console.log("Under Employer", this.employerId);
    } else {
      console.error("Employer ID is null or undefined.");
    }
  }



}
