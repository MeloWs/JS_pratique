import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Product } from './../models/product.model';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
    this.primengConfig.ripple = true;
  }
  onAddToCart(product: Product): void {
    this.productService.event.emit(product);
  }
}
