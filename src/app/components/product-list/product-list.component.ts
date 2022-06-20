import { Component } from '@angular/core';

import { Product, products } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share(product: Product) {
    window.alert('The product: ' + product.name + ' has been shared!');
  }

  onNotify(product: Product) {
    window.alert(
      'You will be notified when the product: ' + product.name + ' goes on sale'
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
