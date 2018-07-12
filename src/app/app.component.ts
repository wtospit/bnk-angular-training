import { GIRLS } from './mock-girls';
import { Component } from '@angular/core';
import { Member } from './bnk-girl/bnk-girl.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bnk48';
  constructor(){
  }

}
