import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable, BehaviorSubject} from 'rxjs'
import { MessageModel } from '../models/message.model';
import { FakeServerService } from './fake-server.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private headers: HttpHeaders;
  private accessPointUrl = 'http://testfront.jobvision.ir/api';

  private messages = new BehaviorSubject(this.fakeServerService.getMessages())

  constructor(private http: HttpClient, private fakeServerService: FakeServerService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
   }

   public  getMessages() : Observable<MessageModel[]>  {
    
    return this.messages;
    // return of(this.fakeServerService.getMessages());
    // return this.http.get(`${this.accessPointUrl}/test/GetListMessage`, { headers: this.headers });

  }


  public removeMessage(id: string ){
    this.fakeServerService.removeMessage(id);
    this.messages.next([...this.fakeServerService.getMessages()])
  }

  public bookmarkMessage(id: string ){
    this.fakeServerService.bookmarkMessage(id);
    this.messages.next([...this.fakeServerService.getMessages()])
  }
}


