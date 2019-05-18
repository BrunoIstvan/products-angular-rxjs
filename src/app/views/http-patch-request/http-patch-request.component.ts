import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { filter, switchMap  } from 'rxjs/operators';

import { DialogEditProductComponent } from './dialog-edit-product/dialog-edit-product.component';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'http-patch-request',
  templateUrl: './http-patch-request.component.html',
  styleUrls: ['./http-patch-request.component.css']
})
export class HttpPatchRequestComponent implements OnInit {

  prods: Product[];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  loadProducts() {

    this.productService.getProducts()
      .subscribe(prods => this.prods = prods);

  }

  editProduct(prod: Product) {

    const newProd = { ...prod };
    const dialogRef = this.dialog.open(DialogEditProductComponent, { width: '400px', data: newProd });
    dialogRef.afterClosed()
      .pipe(
        filter((prod: Product) => prod != undefined),
        switchMap((prod: Product) => this.productService.updateProduct(prod)))
      .subscribe(
        (res: Product) => {
          let index = this.prods.findIndex(p => p._id == prod._id);
          if(index>=0)
            this.prods[index] = res;
        },
        (err) => console.error(err)
      )
  }

}
