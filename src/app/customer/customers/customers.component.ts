import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private customers = [];
  private httpRequestProcessing = false;
  private httpRequestMessage = '';
  private errorMsg = '';
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.loadCustomers();
  }

  beginHttpRequest(msg: string) {
    this.httpRequestMessage = msg;
    this.httpRequestProcessing = true;
  }

  endHttpRequest() {
    this.httpRequestMessage = '';
    this.httpRequestProcessing = false;
  }



  loadCustomers (): void {
    this.beginHttpRequest('Loading customers...');
    this.customerService.getCustomers().subscribe( x => { setTimeout(() => {
        this.customers = x;  this.endHttpRequest(); }, 1000);
    });
  }
}
