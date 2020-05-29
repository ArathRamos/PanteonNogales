import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ListarClienteComponent } from './listar-clientes/listar-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-clientes.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  
  { path: "inicio", component: InicioComponent },

  { path: "acerca-de", component: AcercaDeComponent },
  { path: "clientes", component: ListarClienteComponent },
  { path: "clientes/agregar", component: AgregarClienteComponent },
  { path: "clientes/editar/:id", component: EditarClienteComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full" },// Cuando es la raíz

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
