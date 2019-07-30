import { ComponentsModule } from './../../is-components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down/count-down.component';
import { CountdownModule } from 'ngx-countdown';
// import { PushNotificationsModule } from 'ng-push';
import { PushNotificationModule } from 'ng-push-notification';
@NgModule({
  declarations: [CountDownComponent],
  exports: [CountDownComponent],
  imports: [
    CommonModule,
    CountdownModule,
    ComponentsModule,
    PushNotificationModule.forRoot({
      dir: 'auto',
      icon: 'assets/icons/timeover.png',
      lang: 'en-US',
      renotify: false,
      sticky: false,
      noscreen: false,
      silent: false,
      closeDelay: 6000,
  })
  ]
})
export class NgxModule { }
