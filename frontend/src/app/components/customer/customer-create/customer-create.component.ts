import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer = {
    name: '',
    gender: '',
    cpf: ''
  }

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
  }

  createCustomer(): void {
    this.customerService.create(this.customer).subscribe(() => {
      this.customerService.showMessage('Cliente criado!')
      this.router.navigate(['/customers'])
    })
  }

  cancel(): void {
    this.router.navigate(['/customers'])
  }

}
