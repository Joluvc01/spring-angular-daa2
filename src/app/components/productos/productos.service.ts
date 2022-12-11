import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = "http://localhost:8090/productos";

  constructor(private http: HttpClient) { }

  // BUSCAR 
  public getCart(url:string) {
    return this.http.get(url)
  }

  // LISTAR 
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
  
  // CREAR 
  create(usuariocl: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, usuariocl);
  }
  // BUSCAR 
  get(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + '/' + id);
  }
  // MODIFICAR 
  update(usuariocl: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url, usuariocl);
  }
  // ELIMINAR 
  delete(id: number): Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/' + id);
  }

  getCat() {
    return this.http.get("http://localhost:8090/categorias");
  }


}

