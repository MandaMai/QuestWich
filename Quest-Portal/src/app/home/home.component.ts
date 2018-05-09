import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public currentUser;
  @ViewChild('addPost') addBtn: ElementRef;

  constructor(private commonService: CommonService, private router: Router) {

    if (!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/']);
    } else {
      this.currentUser = localStorage.getItem('loggedInUser');
    }

    this.commonService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
    });
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }
}
