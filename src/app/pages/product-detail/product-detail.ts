import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  slug: String | null =null;
  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('id');}
}
