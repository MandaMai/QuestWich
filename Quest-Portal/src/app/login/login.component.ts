import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})

export class LoginComponent {
  public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
   }

   validateLogin() {
    if (this.user.email && this.user.password) {
        this.loginService.validateLogin(this.user).subscribe(result => {
      if (result['status'] === 'success') {
        this.user = result['data'][0];
        // TODO remove this when complete
        console.log(this.user); // Testing what is coming back from login

        // User data stored locally for profile page and various application displays
        localStorage.setItem('loggedInUser', this.user.username);
        localStorage.setItem('userID', this.user._id);
        localStorage.setItem('userEmail', this.user.email);
        localStorage.setItem('userFirstName', this.user.firstName);
        localStorage.setItem('userLastName', this.user.lastName);
        localStorage.setItem('userBirthdate', this.user.birthdate);
        localStorage.setItem('password', this.user.password);
        localStorage.setItem('status', this.user.status);
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('biography', this.user.biography);
        localStorage.setItem('createdDate', this.user.createdDate);
        localStorage.setItem('closedDate', this.user.closedDate);
        localStorage.setItem('picture', this.user.picture);
        localStorage.setItem('totalProgressCompleted', this.user.totalProgressCompleted);
        localStorage.setItem('totalProgressPending', this.user.totalProgressPending);
        localStorage.setItem('skillListId', this.user.skillListId);
        localStorage.setItem('traitListId', this.user.traitListId);
        localStorage.setItem('personalityType', this.user.personalityType);
        localStorage.setItem('alignmentType', this.user.alignmentType);
        localStorage.setItem('lastModifiedDate', this.user.lastModifiedDate);


        this.router.navigate(['/profile']);
      } else {

        alert('Wrong username password');
      }
    }, error => {
      console.log('error is ', error);
    });
    } else {
        alert('enter user name and password');
    }
}


}
