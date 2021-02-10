import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];
  constructor() { }

  //adding into the Cart
  addToCart(product){
    console.log("addToCart product from CartService!!")
    // console.log("before product id "+product.id);
    this.items.push(product);
    // console.log("after product id "+product.id);
  }

  //get Items from the Cart
  getItems(){
    return this.items;
  }

  //empty the cart
  clearCart(){
    this.items=[];
    return this.items;
  }
}