import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent extends BaseComponent implements OnInit {

  public customer: any = { customerNo: ''};
  public failMessage = null;
  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super();
   }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
  }

  onSaveCustomer(): void {
    this.failMessage = null;
    this.beginHttpRequest('Saving customer details...');
    this.customerService.addCustomer(this.customer).subscribe( x => { console.log('add' + x); setTimeout(() => {
        this.endHttpRequest(); this.router.navigate([`/customers/view/${this.customer.customerNo}`]); }, 1000);
    }, error => { this.endHttpRequest(); this.failMessage = error; });
  }
}
