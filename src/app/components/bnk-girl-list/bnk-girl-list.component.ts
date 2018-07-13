import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  public members: Member[];

  constructor(private bnk: BnkService) { }

  ngOnInit() {
    this.bnk.get().subscribe(data => this.members = data);
  }

}
