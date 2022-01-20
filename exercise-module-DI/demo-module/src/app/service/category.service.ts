import { Injectable } from '@angular/core';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor() {
  }

  getAll() {
    return this.categories;
  }

  // @ts-ignore
  saveCategory(category) {
    this.categories.push(category);
  }
}
