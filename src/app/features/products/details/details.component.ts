import { Component, OnInit, Signal, inject, input } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit {
  productId = input<number>(0, {alias: 'id'})
  
  product!: Signal<Product | undefined>
  
  private readonly productsSvc = inject(ProductsService)
  
  ngOnInit(): void {
    this.product = this.productsSvc.getProductById(this.productId());
  }
}
