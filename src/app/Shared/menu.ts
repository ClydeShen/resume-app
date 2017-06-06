import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'sidebar-menu',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/Shared//menu.html'
})

export class SidebarMenu {
  constructor() {
  }
}
