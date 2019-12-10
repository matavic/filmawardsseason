import { Component, OnInit } from '@angular/core';
import { categories } from './categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;
  constructor() { }

  ngOnInit() {
    this.categories = categories;
  }

}
