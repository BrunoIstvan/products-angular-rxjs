import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.url}/products`);

  }

  getError(): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.url}/err`);

  }

  getProductsDelay(): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.url}/products/delay`);

  }

  getProductsIds(): Observable<string[]> {

    return this.http.get<string[]>(`${this.url}/products/ids`);

  }

  getProductName(id: string): Observable<string> {

    return this.http.get(`${this.url}/products/name/${id}`, 
    { responseType: 'text' });

  }

  saveProduct(prod: Product): Observable<Product> {

    return this.http.post<Product>(`${this.url}/products`, prod);

  }

}
