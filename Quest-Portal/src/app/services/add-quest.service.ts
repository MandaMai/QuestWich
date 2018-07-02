import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quest } from '../models/quest.model';

@Injectable()
export class AddQuestService {

  constructor(private http: HttpClient) { }

  addQuest(quest: Quest) {
    return this.http.post('/api/post/createQuest', {
        title : quest.name,
        description : quest.description
    });
}

updatePost(quest: Quest) {
    return this.http.post('/api/post/updatePost', {
        id: quest._id,
        title : quest.name,
        description : quest.description
    });
}

}
