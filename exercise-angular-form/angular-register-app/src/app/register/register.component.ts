import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../model/user";

let _id = 1;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl('')
  });

  users: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  createUser() {
    const value = this.registerForm.value;
    if (value) {
      const user: User = {
        id: _id++,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword,
        country: value.country,
        age: value.age,
        gender: value.gender,
        phone: value.phone
      };
      console.log(user)
    }
  }
}
