import {
  Component,
  ElementRef,
  Output,
  EventEmitter,
  ViewChild,
  ContentChild,
  Host,
  Inject,
  forwardRef
} from '@angular/core';
import {Http, HTTP_PROVIDERS, JSONP_PROVIDERS, Jsonp} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {AppState} from '../../app.service';
import {RESTAuthentication} from '../../../services'
import {Session} from "../../../Classes/Session";

@Component({
  selector: 'sign-in',
  providers: [],
  styles: [require('../signInStyle.css')],
  template: require('../Templates/SignIn.html')
})
export class SignIn {

  formData = {username: '', password: ''};
  auth:RESTAuthentication;

  constructor(public appState:AppState, public authHttp:AuthHttp, public http:Http, public jsonp:Jsonp) {
    appState.set('menuIsHidden', true);
    appState.GET_MENU().close();
    this.auth = new RESTAuthentication(authHttp, http, jsonp);

  }

  ngOnInit() {
    console.log('hello `SignInRegisterEmployer` component');

  }

  ngAfterViewInit() {
    console.log();

  }

  doLogin(event) {
    console.log(this.formData);
    event.preventDefault();
    let result = this.auth.Authenticate(this.formData.username, this.formData.password, false, Session.CustomerDatabase, Session.LastZambionServerUsed);
    console.log(result);

  }

}
