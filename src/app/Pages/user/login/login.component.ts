import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthenticationServiceService, private router: Router, private app: AppComponent ) {}

  ngOnInit(): void {}

  loginObj: any = {
    email: "",
    password: ""
  };

  loginUser(): void {
    this.authService.login(this.loginObj).subscribe((res: any) => {
      console.log(res);

      if (res && res.token) {
        // sessionStorage.setItem('AuthToken', res.token);
        sessionStorage.setItem('Data', JSON.stringify(res));
        this.router.navigateByUrl('/home');

        this.app.updateLoginStatus();
      } else {
        console.log("Oops! Something went wrong", res.error.message);
        // Handle error here if needed
        // You can also navigate to an error page or display a message to the user
      }
    }, (error) => {
      // Handle error using the error callback
      console.error("An error occurred:", error);
      alert("Oops! Something went wrong. Please try again later.");
    });
  }


}
