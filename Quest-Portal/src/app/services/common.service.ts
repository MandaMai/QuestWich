import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { Quest } from '../models/quest.model';

@Injectable()
export class CommonService {

    public postAdded_Observable = new Subject();
    public postEdit_Observable = new Subject();
    public post_to_be_edited;

    public questAdded_Observable = new Subject();
    public questEdit_Observable = new Subject();
    public quest_to_be_edited;

    constructor() {
        this.post_to_be_edited = new Post();
        this.quest_to_be_edited = new Quest();
    }
    notifyPostAddition() {
        this.postAdded_Observable.next();
    }

    notifyPostEdit() {
        this.postEdit_Observable.next();
    }

    setPostToEdit(post: Post) {
        this.post_to_be_edited = post;
        this.notifyPostEdit();
    }

    notifyQuestAddition() {
        this.questAdded_Observable.next();
    }

    notifyQuestEdit() {
        this.questEdit_Observable.next();
    }

    setQuestToEdit(quest: Quest) {
        this.quest_to_be_edited = quest;
        this.notifyQuestEdit();
    }
}
