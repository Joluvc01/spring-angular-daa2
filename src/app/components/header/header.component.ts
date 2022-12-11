import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/components/categorias/categoria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias = null as any;
  
  constructor(private catService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.catService.getAll().subscribe(
      result => this.categorias = result);
  }
}
