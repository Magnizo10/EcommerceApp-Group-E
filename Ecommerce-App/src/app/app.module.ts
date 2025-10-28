import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DescriptionPageComponent } from './description-page/description-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductservService } from './services/productserv.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CartComponent,
    NavbarComponent,
    ProductPageComponent,
    DescriptionPageComponent,
  ], //i imported CartComponet ,Description and  NavbarComponent, because i made it Standalone so i can be to export
  providers: [ProductservService], // imported this service here to be used across the app
  bootstrap: [AppComponent],
})
export class AppModule {}
