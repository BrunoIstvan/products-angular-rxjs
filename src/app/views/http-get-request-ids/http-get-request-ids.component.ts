import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'http-get-request-ids',
  templateUrl: './http-get-request-ids.component.html',
  styleUrls: ['./http-get-request-ids.component.css']
})
export class HttpGetRequestIdsComponent implements OnInit {

  productsIds: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProductsIds() {

    this.productService.getProductsIds()
      .subscribe(ids => {
        this.productsIds = ids.map(id => ({ _id: id, name: '', department: '', price: 0, description: '' }));
      });

  }

  loadName(id: string, index: number) {

    this.productService.getProductName(id)
      .subscribe( name => {
        if(index >= 0) { 
          this.productsIds[index].name = name;
        }
      } )

  }

}
