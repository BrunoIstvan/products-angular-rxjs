import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'http-post-request',
  templateUrl: './http-post-request.component.html',
  styleUrls: ['./http-post-request.component.css']
})
export class HttpPostRequestComponent implements OnInit {

  newlyProducts: Product[] = [];

  name: string = '';
  price: number = 0;
  department: string = '';

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  save() {

    const p = { name: this.name, 
                department: this.department, 
                price: this.price
              };

    this.productService.saveProduct(p)
      .subscribe(
        (p: Product) => {
          this.newlyProducts.push(p);
          this.clear();
        },
        (err) => {
          console.error(err);
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_error'];
          if(err.status == 0) {
            this.snackBar.open('Could not connect to the server', '', config);
          } else {
            this.snackBar.open(err.error, '', config);
          }
          this.clear();
        }
      )

  }

  clear() {

    this.name = '';
    this.department = '';
    this.price = 0;

  }

}
