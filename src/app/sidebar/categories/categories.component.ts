import { Component, OnInit } from '@angular/core';
import { MessageCategoryModel } from 'src/app/models/message-category.model';
import { MessageCategoryService } from 'src/app/services/message-category.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories: MessageCategoryModel[];
categoryId='';
// countAry:{id:string,count:number}[];
  constructor(private msCategories:MessageCategoryService, private messageService: MessageService) { }

  ngOnInit() {
    this.count();
  }

  setCategory(){
    this.msCategories.currentCategoryId.next(this.categoryId)
  }
  count(){
    this.messageService.getMessages().subscribe(msgs => {
      this.msCategories.getMessageCategories().subscribe(cats=>{
        for(let i =0; i<cats.length; i++){
          if (!(cats[i].displayTitle.includes('-'))){
            cats[i].displayTitle += " - " + msgs.filter(m => m.messageCategoryID === cats[i].id).length
          } 
        }
        this.categories = cats;
      })
    })
  }

}
