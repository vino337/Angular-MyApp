import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  private httpRequestProcessing = false;
  private httpRequestMessage = '';
  private errorMsg = '';
  private customerNo = '';
  private customer = {};
  private contacts = [];
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.customerNo = this.route.snapshot.paramMap.get('customerNo');
    this.loadCustomer();
  }
  beginHttpRequest(msg: string) {
    this.httpRequestMessage = msg;
    this.httpRequestProcessing = true;
  }

  endHttpRequest() {
    this.httpRequestMessage = '';
    this.httpRequestProcessing = false;
  }

  loadCustomer() {

    this.beginHttpRequest('Load customer details...');
    this.customerService.getCustomer(this.customerNo).subscribe( x => { console.log(x); setTimeout(() => {
      this.customer = x[0];  this.endHttpRequest(); this.loadContacts(); }, 1000);
  });
  }

  loadContacts() {
    this.beginHttpRequest('Load contacts...');
    this.customerService.getContacts(this.customerNo).subscribe( x => { console.log(x); setTimeout(() => {
      this.contacts = x;  this.endHttpRequest(); }, 1000);
  });
  }
}
