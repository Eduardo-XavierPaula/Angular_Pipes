import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServices {
  constructor(private readonly _http: HttpClient) {}

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
