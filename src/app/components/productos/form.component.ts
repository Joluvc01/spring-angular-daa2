import { Component, OnInit } from '@angular/core';

import { Producto } from './producto';
import { ProductoService } from './productos.service';

import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  producto: Producto = new Producto();
  titulo: string = "Registro de Producto";
  cat :any=null;

  constructor(private productoservice: ProductoService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
    this.getCat();
  }

  getCat(){
    this.productoservice.getCat().subscribe(item=>{
      this.cat=item;
    })
  }
  
  // CARGAR PERSONA
  cargar(): void {
    this.activatedrouter.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.productoservice.get(id).subscribe(
            es => this.producto = es
          );
        }
      }
    )
  }

  // NUEVA CATEGORIA
  create(): void {
    console.log("CREACION DE PRODUCTO");
    console.log(this.producto);

    this.productoservice.create(this.producto).subscribe(
      res => {this.router.navigate(['/productos'])
      swal('Nuevo Producto',`Producto ${this.producto.nombre} creado con exito!`, 'success')}
    );
  }

  //ACTUALIZAR PERSONA
  update(): void {
    console.log("MODIFICACION DE PRODUCTO");
    console.log(this.producto);

    this.productoservice.update(this.producto).subscribe(
      res => {this.router.navigate(['/productos'])
      swal('Actualizar Producto',`Producto ${this.producto.nombre} actualizado con exito!`, 'success')}
    );

  }

  getProducto(): void{
    console.log(this.producto)
  }

}
