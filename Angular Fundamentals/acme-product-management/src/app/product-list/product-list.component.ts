import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[];
  _listFilter: string;
  products: IProduct[];
  errorMessage: string;

  constructor(private productService: ProductService) {
  }

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  public ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
      );
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((p: IProduct) => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  public onRatingClicked(message: string): void {
    this.title = 'Product List: ' + message;
  }
}
