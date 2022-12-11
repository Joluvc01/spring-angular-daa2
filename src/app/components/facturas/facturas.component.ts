import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.cartItems$.subscribe(items =>    
      this.cartItems = items)};      

  cartItems : any= [];


  dropCart(){
    console.log('Eliminando',this.cartItems.length);
    this.cartItems.pop()
  }
}
