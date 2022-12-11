import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria';
import swal from 'sweetalert2';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias = null as any;
  
  constructor(private catService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.catService.getAll().subscribe(
      result => this.categorias = result);
  }


//ELIMINAR PERSONA
delete(cat: Categoria): void {
  swal({
    title: 'Eliminar Categoria',
    text: `Esta seguro que desea la categoria ${cat.nombre}?`,
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
    this.catService.delete(cat.id).subscribe(
      res => this.catService.getAll().subscribe(
        response => {this.categorias = response
          swal('Cliente Eliminado!',`Cliente  ${cat.nombre} eliminado con exito!`, 'success')}
      )
    );
  }
}) 
}
}
