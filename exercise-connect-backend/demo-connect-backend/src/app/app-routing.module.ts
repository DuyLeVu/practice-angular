import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPostComponent} from "./components/post/list-post/list-post.component";
import {EditPostComponent} from "./components/post/edit-post/edit-post.component";
import {ListStatusComponent} from "./components/status-component/list-status/list-status.component";
import {CreatePostComponent} from "./components/post/create-post/create-post.component";
import {DeletePostComponent} from "./components/post/delete-post/delete-post.component";

const routes: Routes = [
  {
    path:'',
    component: ListPostComponent
  },
  {
    path:'edit-post/:id',
    component: EditPostComponent
  },
  {
    path:'status',
    component: ListStatusComponent
  },
  {
    path:'create-post',
    component: CreatePostComponent
  },
  {
    path:'delete-post/:id',
    component: DeletePostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
