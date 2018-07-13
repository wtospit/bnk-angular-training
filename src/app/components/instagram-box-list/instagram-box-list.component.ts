import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feed } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'instagram-box-list',
  templateUrl: './instagram-box-list.component.html',
  styleUrls: ['./instagram-box-list.component.css']
})
export class InstagramBoxListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bnk: BnkService) { }

  feeds: Feed[];

  ngOnInit() {
    this.bnk.getInstagram(this.route.snapshot.paramMap.get("instagramId")).subscribe(data => {
      this.feeds = data.feeds.filter(o => /\.jpg$/i.test(o.thumbnail));
    });
  }

  goBack() {
    this.router.navigate([""]);
  }

}
