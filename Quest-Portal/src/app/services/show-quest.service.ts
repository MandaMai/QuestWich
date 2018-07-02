import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShowQuestService {

  constructor(private http: HttpClient) { }

  getAllQuest() {
    return this.http.post('/api/post/getAllQuest', {});
  }

  deleteQuest(id) {
    return this.http.post('/api/post/deleteQuest', {id: id});
  }
}
