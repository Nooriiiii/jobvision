import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageCategoryModel } from '../models/message-category.model';
import { MessageModel } from '../models/message.model';
import { FakeServerService } from './fake-server.service';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessageCategoryService {

  private headers: HttpHeaders;
  private accessPointUrl = 'http://testfront.jobvision.ir/api';
  public currentCategoryId = new BehaviorSubject("");

  constructor(private http: HttpClient,private fakeServerService: FakeServerService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  public getMessageCategories(): Observable<MessageCategoryModel[]> {
    return of(this.fakeServerService.getMessageCategories());
    // return this.http.get(`${this.accessPointUrl}/test/GetListMessagesCategory`, { headers: this.headers });
  }
}






