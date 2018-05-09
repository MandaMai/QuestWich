import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  public currentUser;
  constructor(private router: Router) {
    if (!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/']);
    } else {
      this.currentUser = localStorage.getItem('loggedInUser');
      console.log(this.currentUser);
    }
  }

  ngOnInit() {
  }

}
