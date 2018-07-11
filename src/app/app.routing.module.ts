import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { ProductsComponent } from './product/products/products.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: NewCustomerComponent },
  { path: 'customers/view/:customerNo', component: ViewCustomerComponent },
  { path: 'customers/edit/:customerNo', component: EditCustomerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/view/:productNo', component: ViewProductComponent },
  { path: 'products/edit/:productNo', component: EditProductComponent },
  { path: 'products/new', component: NewProductComponent },
  { path: '',   redirectTo: '/customers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
