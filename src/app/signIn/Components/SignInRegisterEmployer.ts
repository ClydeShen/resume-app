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
import {AppState} from '../../app.service';

@Component({
  selector: 'sign-in-register-employer',
  providers: [],
  styles: [require('../signInStyle.css')],
  template: require('../Templates/SignInRegisterEmployer.html')
})
export class SignInRegisterEmployer {
  constructor(public appState:AppState) {
    appState.set('menuIsHidden', true);
    appState.GET_MENU().close();

  }

  ngOnInit() {
    console.log('hello `SignInRegisterEmployer` component');

  }

  ngAfterViewInit() {
    console.log();

  }

}
