import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private mycart: Object[] = [];
  private cartItems = new BehaviorSubject<Object[] | null>(null);
  cartItems$ = this.cartItems.asObservable();
  constructor() { }

  addProduct(carrito :  Object) {
    this.mycart.push(carrito);
    this.cartItems.next(this.mycart);
  }
}
