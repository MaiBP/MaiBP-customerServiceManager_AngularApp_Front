import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service'
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  constructor(public customerService: CustomerService ) { }

  ngOnInit(): void {
  this.getCustomers();
  }
  //loads the data
  getCustomers(){
    this.customerService.getCustomers().subscribe(
      res => {
        this.customerService.customers = res;
      },
      err => console.error(err)
    )
  }

  addCustomer(form: NgForm){
    // console.log(form.value)
   if(form.value._id){
    //  console.log('Updating')
    this.customerService.updateCustomer(form.value).subscribe(
      res => {
     alert('Customer Updated successfully')
    form.reset()},
      (err) => console.log(err)
    )
   } else{
     this.customerService.createCustomer(form.value).subscribe(
       (res) => {
         this.getCustomers();
         form.reset()
       },
       (err) => console.log(err)
     )
   }
   //creates customer passing values from the form
  }
 deleteCustomer(id: string){
  if (confirm('Are you sure you want to delete a customer?')) {
    this.customerService.deleteCustomer(id)
    .subscribe(res =>{
      this.getCustomers()
      // console.log(res)
    },
    (err) => console.log(err))
  }
  // console.log(res)
 }

 editCustomer(customer: Customer){
  // console.log(customer)
  //this gets the form fields completed with the text
  this.customerService.selectedCustomer = customer;
 }

 resetForm(form: NgForm){
   form.reset()
 }

searchText: string = '';

onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  console.log(this.searchText)
}

}
 