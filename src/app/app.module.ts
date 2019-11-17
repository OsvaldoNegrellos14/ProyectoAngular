import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoryComponent } from './category/category.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistryComponent } from './registry/registry.component';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { ResultCategoryComponent } from './result-category/result-category.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    LoginComponent,
    ProductoComponent,
    CategoryComponent,
    ProductosComponent,
    RegistryComponent,
    PaymentComponent,
    ResultCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
