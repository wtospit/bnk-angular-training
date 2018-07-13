import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feed } from '../../models/feed';

@Component({
  selector: 'instagram-box-list',
  templateUrl: './instagram-box-list.component.html',
  styleUrls: ['./instagram-box-list.component.css']
})
export class InstagramBoxListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  endpoint = "https://www.api.bnk48.com/api/social-feeds?page=1&max=1000000000000000&limit=19&username=";

  feeds: Feed[];

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("instagramId"));
    let instagramId = this.route.snapshot.paramMap.get("instagramId");
    this.callApi(instagramId).subscribe(data => {
      this.feeds = data.feeds;
    }, err => {

    });
  }


  callApi(instagramId): Observable<any> {
    //const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': 'Bearer ' + this.token
    //  })
    //};
    return this.http.get(this.endpoint + instagramId)
  }

  goBack() {
    this.router.navigate([""]);
  }

}
