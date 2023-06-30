import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/clientes';
import * as moment from 'moment';
import { ClienteService } from 'src/app/service/cliente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-cliente-creaedita',
  templateUrl: './cliente-creaedita.component.html',
  styleUrls: ['./cliente-creaedita.component.css'],
})
export class ClienteCreaeditaComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nameCliente: new FormControl(),
      apellidoCliente: new FormControl(),
      facultad: new FormControl(),
      emailCliente: new FormControl(),
      telefono: new FormControl(),
      direccion: new FormControl(),
      IDUsuario: new FormControl(),
      cuentaBancaria: new FormControl(),
    });
  }

  constructor(
    private cS: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  aceptar(): void {
    this.cliente.id = this.form.value['id'];
    this.cliente.nameCliente = this.form.value['nameCliente'];
    this.cliente.apellidoCliente = this.form.value['apellidoCliente'];
    this.cliente.facultad = this.form.value['facultad'];
    this.cliente.emailCliente = this.form.value['emailCliente'];
    this.cliente.telefono = this.form.value['telefono'];
    this.cliente.direccion = this.form.value['direccion'];
    this.cliente.IDUsuario = this.form.value['IDUsuario'];
    this.cliente.cuentaBancaria = this.form.value['cuentaBancaria'];

    var regex = /^[A-Za-z\s]+$/;

    if (
      regex.test(this.form.value['nameCliente']) && this.form.value['nameCliente'].length > 0 && this.form.value['nameCliente'].length < 50 &&
      regex.test(this.form.value['apellidoCliente']) && this.form.value['apellidoCliente'].length > 0 && this.form.value['apellidoCliente'].length < 50 &&
      regex.test(this.form.value['facultad']) && this.form.value['facultad'].length > 0 && this.form.value['facultad'].length < 50 &&
      regex.test(this.form.value['emailCliente']) && this.form.value['emailCliente'].length > 0 && this.form.value['emailCliente'].length < 50 &&
      /^\d+$/.test(this.form.value['telefono']) && this.form.value['telefono'].length == 8 &&
      /^\d+$/.test(this.form.value['direccion']) && this.form.value['direccion'].length == 9 &&
      this.form.value['IDUsuario'].length > 0 && this.form.value['IDUsuario'].length < 50 

      ) {
      if (this.edicion) {
        this.cS.update(this.cliente).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.cliente).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['clientes']);
    } else {
      this.mensaje = 'No se puede guardar el alumno';
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listID(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameCliente: new FormControl(data.nameCliente),
          apellidoCliente: new FormControl(data.apellidoCliente),
          facultad: new FormControl(data.facultad),
          emailCliente: new FormControl(data.emailCliente),
          telefono: new FormControl(data.telefono),
          direccion: new FormControl(data.direccion),
          IDUsuario: new FormControl(data.IDUsuario),
          cuentaBancaria: new FormControl(data.cuentaBancaria),
        });
      });
    }
  }
}
