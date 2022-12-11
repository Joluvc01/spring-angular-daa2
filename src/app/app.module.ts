import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PortadaComponent } from './components/portada/portada.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/productos/form.component';
import { ArticulosComponent } from './components/portada/card/articulos/articulos.component';
import { SliderComponent } from './components/portada/slider/slider/slider.component';
import { FormCategroiaComponent } from './components/categorias/form-categroia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormClientesComponent } from './components/clientes/form-clientes.component';
import { CardComponent } from './components/galeria/card/card.component';


const routers: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full' },

  { path: 'portada', component: PortadaComponent },

  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/form', component: FormCategroiaComponent },
  { path: 'categorias/form/:id', component: FormCategroiaComponent },

  { path: 'productos', component: ProductosComponent },
  { path: 'productos/form', component: FormComponent },
  { path: 'productos/form/:id', component: FormComponent },

  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormClientesComponent },
  { path: 'clientes/form/:id', component: FormClientesComponent },

  { path: 'galeria', component: GaleriaComponent },

  { path: 'contacto', component: ContactoComponent },


  

  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    FacturasComponent,
    CategoriasComponent,
    ProductosComponent,
    PortadaComponent,
    FormComponent,
    ArticulosComponent,
    SliderComponent,
    FormCategroiaComponent,
    GaleriaComponent,
    ContactoComponent,
    FormClientesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
