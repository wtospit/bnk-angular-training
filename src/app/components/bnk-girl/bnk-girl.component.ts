import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../models/member';

@Component({
  selector: 'app-bnk-girl',
  templateUrl: './bnk-girl.component.html',
  styleUrls: ['./bnk-girl.component.css']
})
export class BnkGirlComponent implements OnInit {
  @Input() member: Member;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['instagram', this.member.instagramId]);
  }

}
