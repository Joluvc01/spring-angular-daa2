import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from './clientes';
import { ClientesService } from './clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  cliente: Clientes = new Clientes();
  titulo: string = "Registro de Cliente";

  constructor(private cliService: ClientesService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  
  // CARGAR PERSONA
  cargar(): void {
    this.activatedrouter.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.cliService.get(id).subscribe(
            es => this.cliente = es
          );
        }
      }
    )
  }

  // NUEVA PERSONA
  create(): void {
    console.log("CREACION DE CLIENTE");
    console.log(this.cliente);

    this.cliService.create(this.cliente).subscribe(
      res => {this.router.navigate(['/clientes'])
      swal('Nuevo cliente',`Cliente ${this.cliente.nombre} creado con exito!`, 'success')}
    );
  }

  //ACTUALIZAR PERSONA
  update(): void {
    console.log("MODIFICACION DE CLIENTE");
    console.log(this.cliente);

    this.cliService.update(this.cliente).subscribe(
      res => {this.router.navigate(['/clientes'])
      swal('Actualizar Cliente',`Cliente ${this.cliente.nombre} actualizado con exito!`, 'success')}
    );

  }

}
