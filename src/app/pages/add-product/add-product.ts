import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
})
export class AddProduct {
  addForm: FormGroup;

  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: [''],
    });
  }

  submitForm() {
    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.productService.addProduct(this.addForm.value).subscribe({
      next: () => {
        this.loading = false;
        alert('Thêm thành công');
        this.addForm.reset();
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra!';
      },
    });
  }
}