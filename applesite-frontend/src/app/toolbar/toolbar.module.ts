import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GoogleComponent } from './google/google.component';
import { BaseComponent } from './base/base.component';
import { SocialLoginModule, GoogleLoginProvider, AuthServiceConfig } from 'angular-6-social-login'
import { getAuthServiceConfigs } from '../configs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GoogleComponent, BaseComponent],
  imports: [
    MatButtonModule,
    SocialLoginModule,
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  exports:[BaseComponent]
})
export class ToolbarModule {}
