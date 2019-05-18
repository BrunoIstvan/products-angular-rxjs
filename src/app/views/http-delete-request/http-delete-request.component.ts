import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'http-delete-request',
  templateUrl: './http-delete-request.component.html',
  styleUrls: ['./http-delete-request.component.css']
})
export class HttpDeleteRequestComponent implements OnInit {

  prods: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }


  loadProducts() {

    this.productService.getProducts()
      .subscribe(prods => this.prods = prods);

  }

  deleteProduct(prod: Product) {

    this.productService.deleteProduct(prod)
      .subscribe(
        (res) => {
          let index = this.prods.findIndex(p => p._id == prod._id);
          if(index>=0) 
            this.prods.splice(index, 1);
        },
        (err) => console.error(err));

  }

}
