import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent extends BaseComponent implements OnInit {

  public customerNo = '';
  public customer: any;
  public successMessage = null;
  public failMessage = null;
  public contacts = [];

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    super();
  }

  ngOnInit() {
    this.customerNo = this.route.snapshot.paramMap.get('customerNo');
    this.loadCustomer();
  }

  loadCustomer(): void {
    this.failMessage = null;
    this.beginHttpRequest('Loading customer...');
    this.customerService.getCustomer(this.customerNo).subscribe(x => {
      console.log(x); setTimeout(() => {
        if (x != null) {
          this.customer = x[0];
          this.endHttpRequest(); this.loadContacts();
        }
        this.endHttpRequest();
      }, 1000);
    }, error => { this.endHttpRequest(); this.failMessage = error; });
  }

  onSaveCustomer(): void {
    this.successMessage = null;
    this.failMessage = null;
    this.beginHttpRequest('Updating customer details...');
    this.customerService.updateCustomer(this.customer).subscribe(x => {
      console.log('save' + x); setTimeout(() => {
        this.endHttpRequest(); this.successMessage = 'Customer successfully updated.'; this.saveContacts();
      }, 1000);
    }, error => { this.endHttpRequest(); this.failMessage = error; });
  }

  loadContacts() {
    this.beginHttpRequest('Load contacts...');
    this.customerService.getContacts(this.customerNo).subscribe(x => {
      console.log(x); setTimeout(() => {
        this.contacts = x; this.endHttpRequest();
      }, 1000);
    });
  }

  saveContact(contact) {
    this.customerService.updateContact(contact).subscribe(x => {
      console.log('save' + x); setTimeout(() => {
        this.endHttpRequest(); this.successMessage = 'Contact successfully updated.';
      }, 1000);
    }, error => { this.endHttpRequest(); this.failMessage = error; });
  }

  saveContacts() {
    this.contacts.forEach((value) => {
      this.saveContact(value);
    });
  }
}
