import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category);
    this.categoryForm.reset();
  }
}
