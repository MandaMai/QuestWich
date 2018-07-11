import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest-dashboard',
  templateUrl: './quest-dashboard.component.html',
  styleUrls: ['./quest-dashboard.component.scss']
})
export class QuestDashboardComponent implements OnInit {

  public currentUser;
  @ViewChild('addQuest') addBtn: ElementRef;
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

  ngOnInit() {
  }

}
