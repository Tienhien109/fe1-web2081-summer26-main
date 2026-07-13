import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {
addForm: FormGroup;
constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

submitForm() {
    console.log(this.addForm.value);
  }
get username() {
  return this.addForm.get('username');
}
get email() {
  return this.addForm.get('email');
}
get password() {
  return this.addForm.get('password');
}
}

