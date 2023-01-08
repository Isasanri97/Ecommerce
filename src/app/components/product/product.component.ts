import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    title: '',
    price: 0,
    image: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
 


}