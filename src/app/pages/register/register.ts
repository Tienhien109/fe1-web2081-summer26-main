import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.addForm = this.fb.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      },
      {
        validators: this.passwordMatch,
      }
    );
  }

  // Kiểm tra password và confirm giống nhau
  passwordMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm = control.get('confirm')?.value;

    return password === confirm ? null : { notMatch: true };
  }


  submitForm() {

    if (this.addForm.invalid) {
      return;
    }


    // Gửi dữ liệu đăng ký
    console.log(this.addForm.value);


    // Giả lập API thành công
    const success = true;


    if (success) {

      alert('Đăng ký thành công');

      // reset form sau khi đăng ký thành công
      this.addForm.reset();

    } else {

      // API trả lỗi email tồn tại
      alert('Email đã tồn tại');

    }
  }


  // Chuyển sang trang Login
  goLogin() {
    this.router.navigateByUrl('/login');
  }
}