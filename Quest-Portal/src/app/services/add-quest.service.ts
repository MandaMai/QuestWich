import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quest } from '../models/quest.model';

@Injectable()
export class AddQuestService {

  constructor(private http: HttpClient) { }

  addQuest(quest: Quest) {
    return this.http.post('/api/quest/createQuest', {
        name : quest.name,
        description : quest.description,
        progress: quest.progress,
        icon: quest.icon,
        endGoalDate: quest.endGoalDate,
        startDate: quest.startDate,
        endDate: quest.endDate,
        totalCampaign: quest.totalCampaign
    });
}

updateQuest(quest: Quest) {
    return this.http.post('/api/quest/updateQuest', {
        _id: quest._id,
        name : quest.name,
        description : quest.description,
        progress: quest.progress,
        icon: quest.icon,
        endGoalDate: quest.endGoalDate,
        startDate: quest.startDate,
        endDate: quest.endDate,
        totalCampaign: quest.totalCampaign
    });
}

}
