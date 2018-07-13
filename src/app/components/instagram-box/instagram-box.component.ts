import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../models/feed';

@Component({
  selector: 'app-instagram-box',
  templateUrl: './instagram-box.component.html',
  styleUrls: ['./instagram-box.component.css']
})
export class InstagramBoxComponent implements OnInit {
  @Input('feed')
  feed: Feed;
  constructor() { }

  ngOnInit() {
  }

}
