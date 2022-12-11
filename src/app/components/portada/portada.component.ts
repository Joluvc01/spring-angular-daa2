import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  titulo: string = "LPOWE LA MEJOR TIENDA DE COMPONENTES"
  constructor() { }

  ngOnInit(): void {
  }

}
