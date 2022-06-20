import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // Grab the product from the parent component
  @Input() product!: Product;

  // Push an event to the parent component
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
