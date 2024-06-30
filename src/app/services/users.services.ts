import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/user-response.interface';
import { UsersListResponse } from '../types/users-list-response.type';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServices {
  constructor(private readonly _http: HttpClient) {}

  getUsers(): Observable<UsersListResponse> {
    return this._http.get<UsersListResponse>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }

  getUser(): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          }),
        3000
      );
    });
  }

  getPromiseUserById(userId: number): Observable<IUser> {
    return this._http.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
