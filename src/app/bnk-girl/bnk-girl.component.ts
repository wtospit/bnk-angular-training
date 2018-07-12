import { Component, OnInit, Input } from '@angular/core';
import { GIRLS } from "../mock-girls";
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'bnk-girl',
  templateUrl: './bnk-girl.component.html',
  styleUrls: ['./bnk-girl.component.css']
})
export class BnkGirlComponent implements OnInit {

  members: Member[] = GIRLS; 

  @Input('member')
  member: Member;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['instagram', this.member.instagramId]);
  }

}

export class Member {
  id: number;
  name: string;
  imgUrl: string;
  instagramId: string;
}
