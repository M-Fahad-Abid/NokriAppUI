import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiEndPoint: string = "https://localhost:7062/api/"


  constructor(private http: HttpClient) { }

  CreateJob(obj: any, employerId: number) {
    // Call the service method to create the job
    return this.http.post(this.apiEndPoint + 'Job/Create-Job?employerId=' + employerId, obj);
  }
  
}
