import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Quest } from '../models/quest.model';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { AddQuestService } from '../services/add-quest.service';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.scss'],
  providers: [ AddQuestService ]
})
export class AddQuestComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public quest: Quest;
  public modalName = 'Generate or Change a Quest';
  public dateOptions = {'year': 'numeric', month: 'long', day: 'numeric' };

  constructor(private addQuestService: AddQuestService, private router: Router, private commonService: CommonService) {
    this.quest = new Quest();
  }

  ngOnInit() {
    this.commonService.questEdit_Observable.subscribe(res => {
      this.quest = this.commonService.quest_to_be_edited;
      console.log('editing quest is ' , this.quest._id);
    });
  }

  addQuest() {
    if (this.quest.name && this.quest.description) {
      if (this.quest._id) {
        this.addQuestService.updateQuest(this.quest).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyQuestAddition();
        });
      } else {
        this.addQuestService.addQuest(this.quest).subscribe(res => {
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
