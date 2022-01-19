import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPostComponent} from "./components/list-post/list-post.component";

const routes: Routes = [
  {
    path:'',
    component: ListPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
