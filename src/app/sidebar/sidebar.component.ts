import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../models/message.model';
import { MessageService } from '../services/message.service';
import {MessageCategoryService} from '../services/message-category.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  messages: MessageModel[];
  msgCatId='';
  sortDirection='asc'
  constructor(private messageService: MessageService, private messageCategoryService: MessageCategoryService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(msgs => {
      this.messages = msgs.filter(x => !x.delete);
    })

    this.messageCategoryService.currentCategoryId.subscribe(id => {
      this.msgCatId = id;
    })
  }
  onSortDirection(){
    if(this.sortDirection==='desc'){
      this.sortDirection='asc';
    }else{
      this.sortDirection='desc'
    }
  }

}
