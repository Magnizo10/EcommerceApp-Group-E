import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductservService } from './services/productserv.service';

@NgModule({
  declarations: [AppComponent, ProductPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductservService], // imported this service here to be used across the app
  bootstrap: [AppComponent],
})
export class AppModule {}
