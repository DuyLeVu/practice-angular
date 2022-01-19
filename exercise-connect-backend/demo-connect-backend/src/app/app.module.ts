import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListPostComponent } from './components/list-post/list-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListStatusComponent } from './components/status-component/list-status/list-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    EditPostComponent,
    ListStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
