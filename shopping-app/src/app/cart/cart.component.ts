import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalQuantity!: number;
  price!: number;
  totalPrice!: number;

  constructor(private productService: ProductService) {}

  //this part is for the action of adding a product to the cart.
  ngOnInit() {
    this.productService.event.subscribe((product) => {
      let index = -1;
      index = this.cartProducts.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.cartProducts[index].quantity += 1;
      } else if (index === -1) {
        this.cartProducts.push(product);
      }
      this.sum();
    });
  }
  // this function is made for returning the total price of the cart and the total quantity
  sum(): void {
    this.totalQuantity = 0;
    this.price = 0;
    this.totalPrice = 0;
    if (this.cartProducts) {
      this.cartProducts.map((product) => {
        this.totalQuantity += product.quantity;
        this.price += product.price;
        this.totalPrice += product.price * product.quantity;
      });
    }
  }

  // this function delete a product from the cart
  deleteProduct(id: number) {
    let index = this.cartProducts.findIndex((item) => item.id === id);
    this.cartProducts.splice(index, 1);
    this.sum();
  }
}
