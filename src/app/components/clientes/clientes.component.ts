import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Clientes } from './clientes';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente = null as any;
  
  constructor(private cliService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.cliService.getAll().subscribe(
      result => this.cliente = result);
  }


//ELIMINAR PERSONA
delete(cli: Clientes): void {
  swal({
    title: 'Eliminar Cliente',
    text: `Esta seguro que desea eliminar al cliente ${cli.nombre} ${cli.apellido}?`,
    type:'warning',
    showCancelButton:true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si eliminar!',
    cancelButtonText: 'No, cancelar',
    buttonsStyling: true,
    reverseButtons:true
  }).then((result) => {
    if (result.value) {
      this.cliService.delete(cli.id).subscribe(
        res => this.cliService.getAll().subscribe(
          response => {this.cliente = response
            swal('Cliente Eliminado!',`Cliente  ${cli.nombre} eliminado con exito!`, 'success')}
        )
      );
    }
  }) 
}
}
