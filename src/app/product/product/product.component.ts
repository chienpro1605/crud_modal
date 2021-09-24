import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isBoolean} from 'util';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  products: Product[] = [];
  name = '';
  img = '';
  price = 0;
  staus = true;

  constructor() {
  }

  ngOnInit() {
  }

  @Output() create = new EventEmitter<Product>();

  createProduct() {
    let p = new Product(this.name, this.price, this.img, this.staus);
    this.create.emit(p);
  }

  @Output() delete = new EventEmitter<String>()
  deleteProduct(name) {
    this.delete.emit(name);
  }

  showProduct(name) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.name = this.products[i].name;
        this.price = this.products[i].price;
        this.img = this.products[i].img;
      }
    }
  }

  @Output() edit = new EventEmitter<Product>()
  updateProduct() {
    let p = new Product(this.name, this.price, this.img, this.staus);
    this.edit.emit(p);
  }
}
