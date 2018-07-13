import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { InstagramFeed } from '../models/instagram-feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  get(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_base}/bnk/members`);
  }

  getInstagram(id: string): Observable<InstagramFeed> {
    return this.http.get<InstagramFeed>(`${environment.instagram_api_base}${id}`);
  }
}
