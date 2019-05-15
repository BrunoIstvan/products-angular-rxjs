import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'http-get-request',
  templateUrl: './http-get-request.component.html',
  styleUrls: ['./http-get-request.component.css']
})
export class HttpGetRequestComponent implements OnInit, OnDestroy {

  simpleHttpGetRequest$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    
  }

  getSimpleHttpGetRequest() {

    this.simpleHttpGetRequest$ = this.productService.getProducts();
    
  }

}
