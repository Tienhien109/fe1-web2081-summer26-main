import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
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
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: [''],
    });
  }

submitForm() {
    console.log(this.addForm.value);
  }
}
