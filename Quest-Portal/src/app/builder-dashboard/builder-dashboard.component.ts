import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../services/common.service';
import { User } from '../models/user.model';
import { AddUserService } from '../services/add-user.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-builder-dashboard',
  templateUrl: './builder-dashboard.component.html',
  styleUrls: ['./builder-dashboard.component.scss']
})
export class BuilderDashboardComponent implements OnInit {
  public currentUsername;
  public currentUserId;
  public currentUser;
  public previousUser;
  @ViewChild('addUser') addBtn: ElementRef;

  constructor(private commonService: CommonService, private addUserService: AddUserService, private loginService: LoginService) {
    if (localStorage.getItem('loggedInUser')) {
      this.currentUsername = localStorage.getItem('loggedInUser');
    }

    this.commonService.userEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
    });
  }

  ngOnInit() {
    this.currentUser = new User();
    this.currentUser.email = localStorage.getItem('userEmail');
    this.currentUser.password = localStorage.getItem('password');
    console.log(this.currentUser);
    this.loginService.validateLogin(this.currentUser).subscribe(result => {
      if (result['status'] === 'success') {
        this.currentUser = result['data'][0];
        // TODO remove this when complete
        console.log(this.currentUser); // Testing what is coming back from login

    }
  });
}

  editSetup() {
    console.log('made it here');
    this.commonService.setUserToEdit(this.currentUser);
    console.log('edit user is ', this.currentUser);

  }
}
