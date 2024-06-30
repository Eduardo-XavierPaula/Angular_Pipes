import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { LOCALE_ID } from '@angular/core';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { HttpClientModule } from '@angular/common/http';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';
import { ObsComPromiseComponent } from './components/obs-com-promise/obs-com-promise.component';

const datePipeConfig: DatePipeConfig = {
  dateFormat: 'dd/MM/YYYY',
  timezone: '+0000',
};

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe,
    ObsComObjetoComponent,
    ObsComArrayComponent,
    ObsComPromiseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: datePipeConfig,
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
