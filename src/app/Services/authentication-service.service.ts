import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  apiEndPoint: string = "https://localhost:7062/api/"


  constructor(private http: HttpClient) { }



registerCandidate(obj:any){
  console.log('Register Candidate', this.apiEndPoint + 'Authentication/Create-Candidate', obj );
  return this.http.post(this.apiEndPoint + 'Authentication/Create-Candidate', obj);
}


registerEmployer(obj:any){
  console.log('Register Employer', this.apiEndPoint + 'Authentication/Create-Employer', obj );
  return this.http.post(this.apiEndPoint + 'Authentication/Create-Employer', obj);
}

login(obj:any){
  console.log('Login User', this.apiEndPoint + '', obj );
  return this.http.post(this.apiEndPoint + 'Authentication/Login', obj);
}

}
