import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductoService } from './productos.service';
import { Producto } from './producto';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      result => this.productos = result);
  }

//ELIMINAR PERSONA
delete(prod: Producto): void {
  swal({
    title: 'Eliminar Producto',
    text: `Esta seguro que desea el Producto ${prod.nombre}?`,
    type:'warning',
    showCancelButton:true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si eliminar!',
    cancelButtonText: 'No, cancelar',
    buttonsStyling: true,
    reverseButtons:true
  }).then((result) =>{
    if (result.value) {
    this.productoService.delete(prod.id).subscribe(
      res => this.productoService.getAll().subscribe(
        response => {this.productos = response
          swal('Cliente Eliminado!',`Cliente  ${prod.nombre} eliminado con exito!`, 'success')}
      )
    );
  }
}) 
}
}
