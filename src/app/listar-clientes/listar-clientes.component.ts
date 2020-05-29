
import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../clientes.service"
import { Cliente} from "../cliente"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClienteComponent implements OnInit {
  public clientes: Cliente[] = [
    new Cliente("NO CONECTADO", "EN LA BASE DE DATOS", 0)
  ];

  constructor(private clientesService: ClientesService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarCliente(cliente: Cliente) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${cliente.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.clientesService
          .deleteCliente(cliente)
          .subscribe(() => {
            this.obtenerClientes();
            this.snackBar.open('Cliente eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    return this.clientesService
      .getClientes()
      .subscribe((clientes: Cliente[]) => this.clientes = clientes);
  }

}
