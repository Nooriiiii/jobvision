import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './content/default/default.component';
import { MessageDetailComponent } from './content/message-detail/message-detail.component';


const routes: Routes = [
  { 
    path: '',
    component:  DefaultComponent
  },
  { 
    path: ':id',
    component:  MessageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
