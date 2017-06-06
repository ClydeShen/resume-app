/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import {FORM_PROVIDERS, HashLocationStrategy, LocationStrategy} from '@angular/common';
// Angular 2 Http
import {Http, HTTP_PROVIDERS,Jsonp,JSONP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';

// Angular 2 Router
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

// Angular 2 Material
// TODO(gdi2290): replace with @angular2-material/all
import {MATERIAL_PROVIDERS} from './angular2-material2';
// Zambion Services
import {RESTAuthentication} from './../../services'
/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  ...ROUTER_PROVIDERS,
  ...[
    Jsonp,
    JSONP_PROVIDERS
  ],
  provide(AuthHttp, {
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig({
        noJwtError: true,
        noTokenScheme: true
      }), http);
    },
    deps: [Http]
  }),
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  RESTAuthentication
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
