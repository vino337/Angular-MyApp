import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
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
import { BaseComponent } from './base.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    ViewCustomerComponent,
    EditCustomerComponent,
    NewCustomerComponent,
    ProductsComponent,
    ViewProductComponent,
    NewProductComponent,
    EditProductComponent,
    PageNotFoundComponent,
    BaseComponent,
    ContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
