/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation,
  Directive,
  ViewChild,
  Input,
  ElementRef,
  ContentChild,
  Host,
  Inject,
  forwardRef
} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {MdSidenav} from '@angular2-material/sidenav'

import {SidebarMenu} from './Shared/menu'
import {AppState} from './app.service';
import {Home} from './home';
import {SignInToNewZambion, SignInRegisterEmployer, SignIn} from './signIn';
// import {} from '';
import {RouterActive} from './router-active';




/*
 * App Component
 * Top Level Component
 */


@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [RouterActive, SidebarMenu],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('primeui/themes/bootstrap/theme.css'),
    require('primeui/primeui-ng-all.min.css'),
    require('./app.css')
  ],
  template: require('./Shared/_MasterPage.html')
})
//noinspection TypeScriptValidateTypes
@RouteConfig([
  {path: '/', name: 'Index', component: Home, useAsDefault: true},
  {path: '/SignInToNewZambion', name: 'SignInToNewZambion', component: SignInToNewZambion},
  {path: '/SignInRegisterEmployer', name: 'SignInRegisterEmployer', component: SignInRegisterEmployer},
  {path: '/SignIn', name: 'SignIn', component: SignIn},
  {path: '/home', name: 'Home', component: Home},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  {path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About')}
])
export class App {
  @ViewChild('start') menu:MdSidenav;

  loading = false;
  name = "Zambion"
  url = 'https://twitter.com/AngularClass';


  constructor(public appState:AppState) {
    appState.set('menuIsHidden', false);
    // this.title.setTitle(this.name);
  }

  ngOnInit() {
    console.log('Initial App State');


  }

  ngAfterViewInit() {
    this.appState.SET_MENU(this.menu);
  }
}

