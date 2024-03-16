import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-signup-candidate',
  templateUrl: './signup-candidate.component.html',
  styleUrls: ['./signup-candidate.component.css']
})
export class SignupCandidateComponent implements OnInit {
  // Define array of education options
  educationOptions: string[] = ['Graduation', 'M.Phill', 'UnderGraduation' ]; // Add your education options here

  candidateobj: any = {
    "id": 0,
    "userName": "",
    "email": "",
    "password": "",
    "education": "",
    "role": 0
  };

  constructor(private form: FormBuilder, private service: AuthenticationServiceService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  registerCandidate() {
    this.service.registerCandidate(this.candidateobj).subscribe((res:any)=>{
      console.log(res);

       this.candidateobj = {
        "id": 0,
        "userName": "",
        "email": "",
        "password": "",
        "education": "",
        "role": 0
      };
    });
    console.log("our object",this.candidateobj);
  }
}
  

