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

  getInfo(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.api_base}/bnk/members/${id}`);
  }

  getInstagram(id: string): Observable<InstagramFeed> {
    return this.http.get<InstagramFeed>(`${environment.instagram_api_base}${id}`);
  }

  saveInfo(data: Member): Observable<Object> {
    if (data._id !== '') {
      return this.http.patch(`${environment.api_base}/bnk/members/${data._id}`, data);
    }
    return this.http.post(`${environment.api_base}/bnk/members`, data);
  }
}
