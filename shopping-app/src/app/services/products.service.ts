import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product } from './../models/product.model';

@Injectable()
export class ProductService {
  @Output() event = new EventEmitter();
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<any>('../../assets/data.json')
      .toPromise()
      .then((res) => <Product[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
