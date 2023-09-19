import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessagesService } from '../template/messages.service';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:3001/customers"

  constructor(private messages: MessagesService, private httpClient: HttpClient) { }

  showMessage(message: string): void {
    this.messages.showMessageSnackBar(message)
  }

  create(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  read(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }
}
