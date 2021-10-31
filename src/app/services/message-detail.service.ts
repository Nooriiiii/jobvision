import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FakeServerService } from './fake-server.service';
import {of, Observable} from 'rxjs'
import { MessageDetailModel } from '../models/message-detail.model';

@Injectable({
  providedIn: 'root'
})
export class MessageDetailService {

  private headers: HttpHeaders;
  private accessPointUrl = 'http://testfront.jobvision.ir/api';

  constructor(private http: HttpClient, private fakeServerService: FakeServerService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  public getMessageDetail(messageID: string) : Observable<MessageDetailModel>{
    return of(this.fakeServerService.getMessageDetail(messageID));
    //return this.http.get(`${this.accessPointUrl}/test/GetMessage/${messageID}`, { headers: this.headers });
  }
}
