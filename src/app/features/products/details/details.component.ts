import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Signal, inject, input } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { Product } from '@shared/models/product.interface';
import { starComplete, starIncomplete, notStar } from './stars';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit {
  starsArray: number[] = new Array(5).fill(0)
  productId = input<number>(0, {alias: 'id'})
  product!: Signal<Product | undefined>
  
  private readonly productsSvc = inject(ProductsService)
  private readonly sanitizer = inject(DomSanitizer)

  ngOnInit(): void {
    this.product = this.productsSvc.getProductById(this.productId());
  }

  onAddtoCart() {}
  generateSVG (index: number): SafeHtml {
    let svgContent = null;
    const rate = this.product()?.rating?.rate as number;

    if(index+1 <= Math.floor(rate)) {
      svgContent = starComplete
    } else if(index < rate) {
      svgContent = starIncomplete
    } else {
      svgContent = notStar
    }
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
}
