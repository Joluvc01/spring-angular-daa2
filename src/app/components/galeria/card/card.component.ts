import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from '../../facturas/carrito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor( private carritoService: CarritoService) { }

  @Input() prods:any;

  ngOnInit(): void {   
  }

  addCart(){
    this.carritoService.addProduct(this.prods)   
    
  }

}
