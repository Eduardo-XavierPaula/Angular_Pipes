import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: userExample[] = [
    {
      name: 'Eduardo',
      status: 1,
    },
    {
      name: 'jon doe',
      status: 2,
    },
    {
      name: 'doe jon',
      status: 3,
    },
  ];
  inactivateUser(userIndex: number) {
    this.users[userIndex].status === 1
      ? (this.users[userIndex].status = 2)
      : (this.users[userIndex].status = 1);
  }
}

interface userExample {
  name: string;
  status: number;
}
