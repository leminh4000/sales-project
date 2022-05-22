import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Le", "Minh", "leminh@gmail.com", 1),
    new SalesPerson("Do", "Tuan", "dotuan@gmail.com", 2),
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
