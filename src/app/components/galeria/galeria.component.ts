import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/components/productos/productos.service';
import { CarritoService } from '../facturas/carrito.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})


export class GaleriaComponent implements OnInit {

  titulo: string = "Galeria de Productos";
  public productos: any =[];
  carItems : any;

  constructor(private prodService: ProductoService, private carritoService: CarritoService) { }

  ngOnInit(): void {
      
    this.carritoService.cartItems$.subscribe(items=>
      this.carItems = items) 
    this.cargar() ;    
  }

  public cargar(){
    this.prodService.getCart('http://localhost:8090/productos')
    .subscribe(respuesta=>{
      this.productos = respuesta
    })
  }
}
