import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../../services/users.services';
import { IUser } from '../../interfaces/user.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-obs-com-promise',
  templateUrl: './obs-com-promise.component.html',
  styleUrl: './obs-com-promise.component.scss',
})
export class ObsComPromiseComponent implements OnInit {
  userPromise: Promise<IUser> | undefined;
  userByIdPromise: Promise<IUser> | undefined;
  constructor(private readonly _usersService: UsersServices) {}

  ngOnInit(): void {
    this.userPromise = this._usersService.getUser();

    this._usersService.getUser().then((user) => {
      console.log('User => ', user);
    });

    this.userByIdPromise = lastValueFrom(
      this._usersService.getPromiseUserById(2)
    );
  }
}
