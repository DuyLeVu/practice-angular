import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListPostComponent } from './components/post/list-post/list-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListStatusComponent } from './components/status-component/list-status/list-status.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { DeletePostComponent } from './components/post/delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    EditPostComponent,
    ListStatusComponent,
    CreatePostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
