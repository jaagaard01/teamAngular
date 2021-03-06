import { Component, Input } from '@angular/core'
import { Product } from '../product'
import { ProductService } from '../product.service'


@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent {
  @Input()
  product: Product;

  @Input()
  createHandler: Function
  @Input()
  updateHandler: Function
  @Input()
  deleteHandler: Function

  constructor (private productService: ProductService) {}

  createProduct(product: Product) {
    this.productService.createProduct(product).then((newProduct: Product) => {
      this.createHandler(newProduct);
    });
  }

  updateProduct(product: Product): void {
    this.productService.updateProduct(product).then((updatedProduct: Product) => {
      this.updateHandler(updatedProduct);
    });
  }

  deleteProduct(productId: String): void {
    this.productService.deleteProduct(productId).then((deletedProductId: String) => {
      this.deleteHandler(deletedProductId);
    });
  }
}