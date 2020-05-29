import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from "../clientes.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  constructor(private clientesService: ClientesService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  mascotaModel = new Cliente("", "", undefined)

  onSubmit() {
    this.clientesService.addCliente(this.mascotaModel).subscribe(() => {
      this.snackBar.open('Cliente guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/clientes']);
    })
  }v

}
