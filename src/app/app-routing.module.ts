import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoryComponent } from './category/category.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistryComponent } from './registry/registry.component';
import { PaymentComponent } from './payment/payment.component';
import { ResultCategoryComponent } from './result-category/result-category.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'acceder', component: LoginComponent},
  {path: 'products/:id', component: ProductoComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'products', component: ProductosComponent},
  {path: 'registro', component: RegistryComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'result', component: ResultCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
