import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPostComponent} from "./components/list-post/list-post.component";
import {EditPostComponent} from "./components/edit-post/edit-post.component";
import {ListStatusComponent} from "./components/status-component/list-status/list-status.component";

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
