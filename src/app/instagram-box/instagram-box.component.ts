import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'instagram-box',
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

export class Feed {
    id: number;
    username: string;
    item_id: string;
    service: string;
    title: string;
    url: string;
    thumbnail: string;
    created_time: number;
    data: string;
    status: number;
    created: number;
    changed: number; 
}
