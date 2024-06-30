import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../../services/users.services';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response.type';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss',
})
export class ObsComArrayComponent implements OnInit {
  users$!: Observable<UsersListResponse>;
  constructor(private readonly _usersService: UsersServices) {}

  ngOnInit(): void {
    this.users$ = this._usersService.getUsers();
  }
}
