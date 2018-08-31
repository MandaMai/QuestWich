import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class AddUserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post('/api/user/createUser', {
        username : user.username,
        password : user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        birthdate: user.birthdate,
        email: user.email,
        status: user.status,
        biography: user.biography,
        createdDate: user.createdDate,
        closedDate: user.closedDate,
        picture: user.picture,
        totalProgressCompleted: user.totalProgressCompleted,
        totalProgressPending: user.totalProgressPending,
        skillListId: user.skillListId,
        traitListId: user.traitListId,
        personalityType: user.personalityType,
        alignmentType: user.alignmentType,
        lastModifiedDate: user.lastModifiedDate
    });
}

updateUser(user: User) {
    return this.http.post('/api/user/updateUser', {
        id: user._id,
        username : user.username,
        password : user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        birthdate: user.birthdate,
        email: user.email,
        status: user.status,
        biography: user.biography,
        createdDate: user.createdDate,
        closedDate: user.closedDate,
        picture: user.picture,
        totalProgressCompleted: user.totalProgressCompleted,
        totalProgressPending: user.totalProgressPending,
        skillListId: user.skillListId,
        traitListId: user.traitListId,
        personalityType: user.personalityType,
        alignmentType: user.alignmentType,
        lastModifiedDate: user.lastModifiedDate
    });
}
getUser2(user: User) {
    return this.http.post('/api/user/getUser', {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        birthdate: user.birthdate,
        status: user.status,
        username: user.username,
        biography: user.biography,
        createdDate: user.createdDate,
        closedDate: user.closedDate,
        picture: user.picture,
        totalProgressCompleted: user.totalProgressCompleted,
        totalProgressPending: user.totalProgressPending,
        skillListId: user.skillListId,
        traitListId: user.traitListId,
        lastModifiedDate: user.lastModifiedDate,
        _id: user._id
    });
}
getUser(id) {
    const user = new User();
    console.log('made it here 1');
    return this.http.post('/api/user/getUser', {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        birthdate: user.birthdate,
        status: user.status,
        username: user.username,
        biography: user.biography,
        createdDate: user.createdDate,
        closedDate: user.closedDate,
        picture: user.picture,
        totalProgressCompleted: user.totalProgressCompleted,
        totalProgressPending: user.totalProgressPending,
        skillListId: user.skillListId,
        traitListId: user.traitListId,
        lastModifiedDate: user.lastModifiedDate,
        _id: user._id
    });
}
}
