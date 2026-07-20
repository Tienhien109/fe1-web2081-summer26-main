import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  api = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  addProduct(product: any) {
    return this.http.post(this.api, product);
  }
}