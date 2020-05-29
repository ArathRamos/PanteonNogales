import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from "../clientes.service"
import { Cliente } from '../cliente';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente("", "", 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private clientesService: ClientesService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idMascota = this.route.snapshot.paramMap.get("id");
    this.clientesService.getCliente(idMascota).subscribe((cliente:Cliente) => this.cliente = cliente)
  }

  volver() {
    this.router.navigate(['/clientes']);
  }

  onSubmit() {
    this.clientesService.updateCliente(this.cliente).subscribe(() => {
      this.snackBar.open('Cliente actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
