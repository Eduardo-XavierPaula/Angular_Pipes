import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersServices } from '../../services/users.services';
import { IUserResponse } from '../../interfaces/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss',
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>;

  constructor(private readonly _usersServices: UsersServices) {}

  ngOnInit(): void {
    this.user$ = this._usersServices.getUserById(2);

    this.userSubs = this._usersServices
      .getUserById(1)
      .subscribe((userResponse) => {
        this.user = userResponse;
      });
  }

  ngOnDestroy(): void {
    this.userSubs && this.userSubs.unsubscribe();
  }
  onBtnClick(userId: number): void {
    this.user$ = this._usersServices.getUserById(userId);
  }
}
