import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeAndProfileService {

  apiEndPoint: string = "https://localhost:7062/api/"

  constructor(private http: HttpClient) { }

  createResume(obj:any){
    console.log('Create Resume', this.apiEndPoint +
    '', obj);

    return this.http.post(this.apiEndPoint + '', obj);
  }

}
