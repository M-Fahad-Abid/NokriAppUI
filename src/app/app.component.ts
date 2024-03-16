import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 isLoggedIn: boolean = false;
 userInfo: any;
//  Data: any;
 
 constructor(private router:Router) {
  this.updateLoginStatus();
 }

 updateLoginStatus(): void {
  const data = sessionStorage.getItem('Data');
  if (data == null) {
    this.isLoggedIn = false;
    this.userInfo = null;
  } 
  else {
    this.userInfo = JSON.parse(data);
    if (this.userInfo?.candidate || this.userInfo?.employer) 
    {
      this.isLoggedIn = true;
      console.log(this.userInfo);
    } 
    else
     {
      this.isLoggedIn = false;
      this.userInfo = null; 
      }
  }
  // console.log('Checking', data == null, this.userInfo.email, this.isLoggedIn);
}

logoutUser(): void {
  // Clear session storage or perform other logout actions
  sessionStorage.clear();
  // Update login status after logout
  this.updateLoginStatus();
  this.isLoggedIn = false;
}

// navigateToUpdateResume(): void {
//   console.log('Navigating to update resume');
//   this.router.navigate(['update-resume']);
// }
}
