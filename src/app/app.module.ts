import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './services/product.service';
import { HttpGetRequestComponent } from './views/http-get-request/http-get-request.component';
import { HttpGetRequestErrorComponent } from './views/http-get-request-error/http-get-request-error.component';
import { HttpGetRequestLoadingComponent } from './views/http-get-request-loading/http-get-request-loading.component';
import { HttpGetRequestIdsComponent } from './views/http-get-request-ids/http-get-request-ids.component';
import { HttpPostRequestComponent } from './views/http-post-request/http-post-request.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpGetRequestComponent,
    HttpGetRequestErrorComponent,
    HttpGetRequestLoadingComponent,
    HttpGetRequestIdsComponent,
    HttpPostRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
