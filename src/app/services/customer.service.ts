import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Customer } from '../models/customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_API = 'http://localhost:4000/api/customers';
  customers: Customer[] = [];

  selectedCustomer: Customer = {
     name: '',
     lastName: '',
     phoneNumber: 0,
     email: '',
     inquiry: ''
  };

 constructor(private http: HttpClient){}
// to fetch all customers
  getCustomers(){
    return this.http.get<Customer[]>(this.URL_API);
    
  }
 createCustomer(customer: Customer){
   return this.http.post(this.URL_API, customer)
 }

 deleteCustomer(_id: string){
   //http://localhost:4000/api/customer/:id
   return this.http.delete(`${this.URL_API}/${_id}`)
  
 }
 updateCustomer(customer: Customer){
   return this.http.put(`${this.URL_API}/${customer._id}`, customer);
 }

 

}

