import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Yuvraj", "Singh", "yuvraj1510@gmail.com", 50000),
    new SalesPerson("Jon", "Doe", "john.doe@gmail.com", 40000),
    new SalesPerson("Adam", "Gill", "adam.gill@gmail.com", 90000),
    new SalesPerson("Eve", "Murphy", "eve.murphy@gmail.com", 60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
