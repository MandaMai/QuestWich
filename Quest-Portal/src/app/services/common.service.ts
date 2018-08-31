import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { Quest } from '../models/quest.model';
import { User } from '../models/user.model';

@Injectable()
export class CommonService {

    public postAdded_Observable = new Subject();
    public postEdit_Observable = new Subject();
    public post_to_be_edited;

    public questAdded_Observable = new Subject();
    public questEdit_Observable = new Subject();
    public quest_to_be_edited;

    public userAdded_Observable = new Subject();
    public userEdit_Observable = new Subject();
    public user_to_be_edited;

    constructor() {
        this.post_to_be_edited = new Post();
        this.quest_to_be_edited = new Quest();
        this.user_to_be_edited = new User();
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

    notifyUserAddition() {
        this.userAdded_Observable.next();
    }

    notifyUserEdit() {
        this.userEdit_Observable.next();
    }

    setUserToEdit(user: User) {
        console.log(user);
        this.user_to_be_edited = user;
        this.notifyUserEdit();
    }
  }

