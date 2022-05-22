import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Le", "Minh", "leminh@gmail.com", 10000),
    new SalesPerson("Do", "Tuan", "dotuan@gmail.com", 20000),
    new SalesPerson("Do", "Tuan", "dotuan@gmail.com", 30000),
    new SalesPerson("Do", "Tuan", "dotuan@gmail.com", 40000),
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
