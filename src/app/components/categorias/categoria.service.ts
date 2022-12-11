import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = "http://localhost:8090/categorias";

  constructor(private http: HttpClient) { }

  // LISTAR 
  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }
  
  // CREAR 
  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }
  // BUSCAR 
  get(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.url + '/' + id);
  }
  // MODIFICAR 
  update(usuariocl: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.url, usuariocl);
  }
  // ELIMINAR 
  delete(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(this.url + '/' + id);
  }

}

