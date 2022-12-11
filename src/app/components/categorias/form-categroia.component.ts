import { Component, OnInit } from '@angular/core';

import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-categroia',
  templateUrl: './form-categroia.component.html',
  styleUrls: ['./form-categroia.component.css']
})
export class FormCategroiaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  titulo: string = "Registro de Categoria";

  constructor(private catService: CategoriaService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  
  // CARGAR PERSONA
  cargar(): void {
    this.activatedrouter.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.catService.get(id).subscribe(
            es => this.categoria = es
          );
        }
      }
    )
  }

  // NUEVA CAT
  create(): void {
    console.log("CREACION DE CATEGORIA");
    console.log(this.categoria);

    this.catService.create(this.categoria).subscribe(
      res => {this.router.navigate(['/categorias'])
      swal('Nuevo Categoria',`Categoria ${this.categoria.nombre} creada con exito!`, 'success')}
    );
  }

  //ACTUALIZAR CAT
  update(): void {
    console.log("MODIFICACION DE CATEGORIA");
    console.log(this.categoria);

    this.catService.update(this.categoria).subscribe(
      res => {this.router.navigate(['/categorias'])
      swal('Actualizar Categoria',`Categoria ${this.categoria.nombre} actualizada con exito!`, 'success')}
    );

  }

}
