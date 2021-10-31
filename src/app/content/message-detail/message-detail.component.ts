import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageDetailModel } from 'src/app/models/message-detail.model';
import { MessageDetailService } from 'src/app/services/message-detail.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements  OnInit {
  messageDetail: MessageDetailModel;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private messageDetailService: MessageDetailService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(p => {
      const id = p.get("id");
      this.messageDetailService.getMessageDetail(id).subscribe(m => this.messageDetail = m);
    })
  }


  remove() {
    if (confirm("این پیام حذف شود؟")) {
      this.messageService.removeMessage(this.messageDetail.messageID)
      this.router.navigate(["/"])
      // this.router.navigate(['..'], {relativeTo: this.activateRoute})
    }
  }

  bookmark() {
    this.messageService.bookmarkMessage(this.messageDetail.messageID)
  }

}
