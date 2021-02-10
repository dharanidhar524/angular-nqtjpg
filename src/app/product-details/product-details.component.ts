import { Component, OnInit } from '@angular/core';

import {products} from '../products'
import { ActivatedRoute } from '@angular/router';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;
  constructor( private route : ActivatedRoute, 
  private cartService : CartService, ) {
    console.log("constructor()");
   }

  ngOnInit():void {
    console.log("ngOnInit()");
    const routeParam= this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParam.get('productId'));

    //get the product with productId
    this.product = products.find(product => product.id === 
    productIdFromRoute)
    console.log(this.product)
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert("added to cart successfully!!");
    console.log("added addToCart() to ProductDetailsComponent!!")
  }

}