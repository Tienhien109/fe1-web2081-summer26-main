import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.http
      .get<any[]>(
        `http://localhost:3000/users?email=${email}&password=${password}`
      )
      .subscribe((res) => {
        if (res.length > 0) {
          localStorage.setItem('token', 'fake-token');
          localStorage.setItem('user', JSON.stringify(res[0]));

          alert('Đăng nhập thành công');

          this.router.navigate(['/']);
        } else {
          alert('Sai email hoặc mật khẩu');
        }
      });
  }
}