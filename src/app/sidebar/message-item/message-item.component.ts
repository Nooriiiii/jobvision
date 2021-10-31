import { Component, Input, OnInit } from '@angular/core';
import { MessageModel } from 'src/app/models/message.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() msg : MessageModel
 
  
  constructor() { }

  ngOnInit() {
  }

}
