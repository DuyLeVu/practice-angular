import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import {Category} from "../../model/category";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categories = this.categoryService.getAll();
  }

}
