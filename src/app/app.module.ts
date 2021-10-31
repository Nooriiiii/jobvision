import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageItemComponent } from './sidebar/message-item/message-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { DefaultComponent } from './content/default/default.component';
import { MessageDetailComponent } from './content/message-detail/message-detail.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './sidebar/categories/categories.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { JalaliPipe } from './pipes/jalali.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MessageItemComponent,
    ContentComponent,
    DefaultComponent,
    MessageDetailComponent,
    HeaderComponent,
    CategoriesComponent,
    FilterPipe,
    SortPipe,
    JalaliPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSlimScrollModule
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
