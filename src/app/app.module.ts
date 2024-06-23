import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { LOCALE_ID } from '@angular/core';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/YYYY',
  timezone: '+0000',
};

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [AppComponent, UserStatusPipe, TruncatePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: datePipeConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
