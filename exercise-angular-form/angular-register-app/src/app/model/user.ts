import {FormControl} from "@angular/forms";

export interface User {
  id?: number;
  email?: String;
  password?: String;
  confirmPassword?: String;
  country?: String;
  age?: number;
  gender?: String;
  phone?: String;
}
