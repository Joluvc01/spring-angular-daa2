import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'facturas',
    component:FacturasComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },  
  {
    path:'categorias',
    component:CategoriasComponent
  },  

  {
    path:'portada',
    component:PortadaComponent
  },  

  {
    path:'galeria',
    component:GaleriaComponent
  },

  {
    path:'contacto',
    component:ContactoComponent
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
