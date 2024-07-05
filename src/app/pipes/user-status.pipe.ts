import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    // if (userStatus === UserStatusEnum.ATIVO) {
    //   return 'Ativo';
    // } else if (userStatus === UserStatusEnum.INATIVO) {
    //   return 'Inativo';
    // } else {
    //   return 'Inválido';
    // }
    try {
      if (userStatus === 3) {
        throw new Error('Ocorreu um erro.');
      }
      const userStatusDescription: { [key: number]: string } = {
        [UserStatusEnum.ATIVO]: 'Ativo',
        [UserStatusEnum.INATIVO]: 'Inativo',
      };

      return userStatusDescription[userStatus] ?? 'Inválido';
    } catch (error) {
      return 'Status Inválido';
    }
  }
}
