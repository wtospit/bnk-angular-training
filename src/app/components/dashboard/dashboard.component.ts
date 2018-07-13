import { Component, OnInit } from '@angular/core';
import { GIRLS } from '../../mock-girls';
import { Member } from '../../models/member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  members: Member[] = GIRLS;

  ngOnInit() {
  }

}
