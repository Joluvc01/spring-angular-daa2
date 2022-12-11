import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url: string = "http://localhost:8090/clientes";

  constructor(private http: HttpClient) { }

  // LISTAR 
  getAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.url);
  }
  
  // CREAR 
  create(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.url, cliente);
  }
  // BUSCAR 
  get(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(this.url + '/' + id);
  }
  // MODIFICAR 
  update(cliente: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(this.url, cliente);
  }
  // ELIMINAR 
  delete(id: number): Observable<Clientes> {
    return this.http.delete<Clientes>(this.url + '/' + id);
  }

}

