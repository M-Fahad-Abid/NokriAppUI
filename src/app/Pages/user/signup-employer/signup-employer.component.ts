import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';


@Component({
  selector: 'app-signup-employer',
  templateUrl: './signup-employer.component.html',
  styleUrls: ['./signup-employer.component.css']
})
export class SignupEmployerComponent implements OnInit {

 
  constructor(private form:FormBuilder, private service: AuthenticationServiceService ) {} 
  
  ngOnInit(): void {
    
  }

  employerobj: any = {
      "id": 0,
      "companyName": "",
      "email": "",
      "password": "",
      "role": 0
  };




  registerEmployer() {
    this.service.registerEmployer(this.employerobj).subscribe((res:any)=>{
      console.log(res);

      this.employerobj = {
        "id": 0,
        "companyName": "",
        "email": "",
        "password": "",
        "role": 0
      };
    });
    console.log("our object",this.employerobj);
  }


}