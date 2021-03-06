import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListCategoryComponent,
    CreateCategoryComponent
  ],
  exports: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ],
})
export class CategoryModule { }
