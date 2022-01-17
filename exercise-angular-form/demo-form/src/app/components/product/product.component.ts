import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [
    {
      id: 1,
      name: "Iphone 12",
      price: 123
    },
    {
      id: 1,
      name: "Iphone 12",
      price: 123
    }];

  formDemo = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  createProduct() {
    this.listProduct.push(this.formDemo.value)
  }
}
