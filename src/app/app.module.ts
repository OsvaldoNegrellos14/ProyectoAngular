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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormCrudComponent } from './form-crud/form-crud.component';

var firebaseConfig = {
  apiKey: "AIzaSyDo49YFRdGUuV28YQS4y3vgRUhCKdz9WPo",
  authDomain: "proyectoangular-8322a.firebaseapp.com",
  databaseURL: "https://proyectoangular-8322a.firebaseio.com",
  projectId: "proyectoangular-8322a",
  storageBucket: "proyectoangular-8322a.appspot.com",
  messagingSenderId: "16234422408",
  appId: "1:16234422408:web:4acc5f8e0d6c139333ff3d"
};

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
    ResultCategoryComponent,
    FormCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
