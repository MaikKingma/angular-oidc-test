import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://host.docker.internal/realms/digid25',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: 'mijn.rvo.nl',
              scope: 'openid profile', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              unauthorizedRoute: `${window.location.origin}/unauthorized`
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
