import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { AddUserService } from '../services/add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [ AddUserService ]
})
export class AddUserComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public user: User;
  public modalName;
  public dateOptions = {'year': 'numeric', month: 'long', day: 'numeric' };

  constructor(private addUserService: AddUserService, private router: Router, private commonService: CommonService) {
    this.user = new User();
  }

  ngOnInit() {
    this.modalName = 'Add A Quest';
    this.commonService.userEdit_Observable.subscribe(res => {
      this.user = this.commonService.user_to_be_edited;
      console.log('editing user is ' , this.user._id);
      this.modalName = 'Edit Your Quest';
    });
  }

  addQuest() {
    if (this.user.email && this.user.password) {
      if (this.user._id) {
        this.addUserService.updateUser(this.user).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyQuestAddition();
        });
      } else {
        this.addUserService.addUser(this.user).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyQuestAddition();
        });
      }
  } else {
      alert('Title and Description required');
  }
  }
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }



}

