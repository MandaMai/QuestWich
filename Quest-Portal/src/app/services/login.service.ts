import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {

    }

    validateLogin(user: User) {
        return this.http.post('/api/user/login', {
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
