import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowQuestService } from '../services/show-quest.service';
import { CommonService } from '../services/common.service';
import { Quest } from '../models/quest.model';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-show-quest',
  templateUrl: './show-quest.component.html',
  styleUrls: ['./show-quest.component.scss'],
  providers: [ ShowQuestService ]
})
export class ShowQuestComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public quests: any [];
  public quest_to_delete;

  constructor(private showQuestService: ShowQuestService, private commonService: CommonService, private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.getAllQuest();

    this.commonService.questAdded_Observable.subscribe(res => {
      this.getAllQuest();
    });
  }

  getAllQuest() {
    this.showQuestService.getAllQuest().subscribe(result => {
      console.log('get all quest result is ', result);
      this.quests = result['data'];
    });
  }

  editQuest(quest: Quest) {
    this.commonService.setQuestToEdit(quest);
    console.log('edit quest is ', quest);
  }

  setDelete(quest: Quest) {
    this.quest_to_delete = quest;
  }

  unsetDelete() {
    this.quest_to_delete = null;
  }

  deleteQuest() {
    console.log('quest deleting is ', this.quest_to_delete._id);
    this.showQuestService.deleteQuest(this.quest_to_delete._id).subscribe(res => {
      this.getAllQuest();
      this.closeBtn.nativeElement.click();
    });
  }

  // TODO need to get number of days since opening IF item is not closed
  getDays(quest: Quest) {
    console.log('made it here');
    const today = Date.now();
  }

  public getSanitizeUrl( url: string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
