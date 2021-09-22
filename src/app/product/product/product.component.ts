import { Component, OnInit } from '@angular/core';

class Product {
  name: string;
  price: number;
  img: string;

  constructor(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
  }
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  name: string = '';
  img: string = '';
  price: number = 0;

  constructor() {
    this.products.push(new Product('chien', 3000, 'https://radiotruyenviet.vn/wp-content/uploads/2020/02/36-1.jpg?is-pending-load=1'));
    this.products.push(new Product('chien1', 5000, 'https://radiotruyenviet.vn/wp-content/uploads/2020/02/36-1.jpg?is-pending-load=1'));
    this.products.push(new Product('chien2', 100000, 'https://radiotruyenviet.vn/wp-content/uploads/2020/02/36-1.jpg?is-pending-load=1'));
  }

  ngOnInit() {
  }

  createProduct() {
    this.products.push(new Product(this.name, this.price, this.img));
    name: string = '';
    img: string = '';
    price: number = 0;
  }

  deleteProduct(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1);
        return;
      }
    }
  }

  showProduct(name) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++){
      if (this.products[i].name === name) {
        this.name = this.products[i].name;
        this.price = this.products[i].price;
        this.img = this.products[i].img;
      }
    }
  }

  updateProduct(name) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products[i] = new Product(this.name, this.price, this.img);
        name: string = '';
        img: string = '';
        price: number = 0;
        return;
      }
    }
  }
}
