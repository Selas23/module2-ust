import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  customer: Customer = new Customer();
  constructor(){}

  ngOnInit(): void{}
    mySubmit(regForm: any){
      console.log('form submitted',regForm)
      console.log('',this.customer)
    }
}
