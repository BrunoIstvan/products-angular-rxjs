import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'http-get-request-loading',
  templateUrl: './http-get-request-loading.component.html',
  styleUrls: ['./http-get-request-loading.component.css']
})
export class HttpGetRequestLoadingComponent implements OnInit {

  productsLoading: Product[];
  loading: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProductsLoading() {

    this.loading = true;
    this.productService.getProductsDelay()
      .subscribe(prods => {
        this.loading = false;
        this.productsLoading = prods;
      }, 
      err => {
        console.error(err);
        this.loading = false;
      });

  }

}
