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
  selector: 'sign-in-to-new-zambion',
  providers: [],
  styles: [require('../signInStyle.css')],
  template: require('../Templates/SignInToNewZambion.html')
})
export class SignInToNewZambion {
  constructor(public appState:AppState) {
    appState.set('menuIsHidden', true);
    appState.GET_MENU().close();
  }

  ngOnInit() {
    console.log('hello `SignInToNewZambion` component');
  }

  ngAfterViewInit() {
    console.log();
  }
}
