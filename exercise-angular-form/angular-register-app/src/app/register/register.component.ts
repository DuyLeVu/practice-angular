import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
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
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',Validators.required),
    country: new FormControl(''),
    age: new FormControl('',[Validators.required, Validators.min(16)]),
    gender: new FormControl('',Validators.required),
    phone: new FormControl('',[Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')])
  });

  users: User[] = [];
  listCountry = [
    "Việt Nam", "Trung Quốc", "Nhật Bản"
  ]

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
