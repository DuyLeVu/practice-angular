import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "../product/list-product/list-product.component";
import {CreateProductComponent} from "../product/create-product/create-product.component";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListCategoryComponent
  }, {
    path: 'create',
    component: CreateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
