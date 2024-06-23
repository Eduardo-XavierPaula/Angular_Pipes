import { Component, OnInit } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  pessoa = {
    nome: 'Felipe',
    idade: 26,
    status: UserStatusEnum.ATIVO,
  };

  minhaData: string = '2023-10-21T21:00:00.000Z';
  minhaDataObj: Date = new Date('2023-10-21T21:00:00.000Z');
  ngOnInit(): void {
    console.log('Data Convertida para a região', new Date(this.minhaData));
    console.log('Data UTC-0', new Date(this.minhaData).toUTCString());
    console.log('Timestamp', new Date(this.minhaData).getTime());
    console.log('Timestamp', this.minhaDataObj);
  }
}
