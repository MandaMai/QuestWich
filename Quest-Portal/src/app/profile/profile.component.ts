import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private sanitizer: DomSanitizer) { }
  public currentUser = new User();
  public percentageCompleted;
  public dateOptions = {'year': 'numeric', month: 'long', day: 'numeric' };

  ngOnInit() {
    this.setupUserFromLocalStorage();
    this.establishPercentageComplete();
  }

  public setupUserFromLocalStorage() {
    this.currentUser.email = localStorage.getItem('userEmail');
    this.currentUser.username = localStorage.getItem('username');
    this.currentUser.firstName = localStorage.getItem('userFirstName');
    this.currentUser.lastName = localStorage.getItem('userLastName');
    this.currentUser.status = localStorage.getItem('status');
    this.currentUser.biography = localStorage.getItem('biography');
    this.currentUser.birthdate = new Date(localStorage.getItem('userBirthdate')).toLocaleDateString('en-US', this.dateOptions);

    this.currentUser.createdDate = new Date(localStorage.getItem('createdDate')).toLocaleDateString('en-US', this.dateOptions);
    this.currentUser.picture = localStorage.getItem('picture');
    this.currentUser.totalProgressCompleted = +localStorage.getItem('totalProgressCompleted');
    this.currentUser.totalProgressPending = +localStorage.getItem('totalProgressPending');
    this.currentUser.skillListId = localStorage.getItem('skillListId');
    this.currentUser.traitListId = localStorage.getItem('traitListId');
    this.currentUser.lastModifiedDate = new Date(localStorage.getItem('lastModifiedDate')).toLocaleDateString('en-US', this.dateOptions);
  }

  public establishPercentageComplete() {
    this.percentageCompleted = ((this.currentUser.totalProgressCompleted /
      (this.currentUser.totalProgressCompleted + this.currentUser.totalProgressPending)) * 100).toFixed(2) + '%';
  }

  public getSanitizeUrl( url: string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
