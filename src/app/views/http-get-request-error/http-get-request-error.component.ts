import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'http-get-request-error',
  templateUrl: './http-get-request-error.component.html',
  styleUrls: ['./http-get-request-error.component.css']
})
export class HttpGetRequestErrorComponent implements OnInit {

  errorHandling: Product[];

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  getErrorRequest() {

    this.productService.getError()
      .subscribe(prods => this.errorHandling = prods ,
                 err => { 
                   console.error(err);
                   let config = new MatSnackBarConfig();
                   config.duration = 2000;
                   config.panelClass = ['snack_error'];
                   if(err.status == 0) {
                    this.snackBar.open('Could not connect to the server', '', config);
                   } else {
                    this.snackBar.open(err.error, '', config);
                   }
                  });

  }

  getSuccessRequest() {

    this.productService.getProductsDelay()
      .subscribe(prods => { 
                  this.errorHandling = prods; 
                  let config = new MatSnackBarConfig();
                  config.duration = 2000;
                  config.panelClass = ['snack_ok'];
                  this.snackBar.open('Products successfully loaded', '', config);
                });

  }

}
