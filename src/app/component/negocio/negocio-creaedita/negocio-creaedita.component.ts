import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Negocio } from 'src/app/model/negocio';
import * as moment from 'moment';
import { NegocioService } from 'src/app/service/negocio.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-negocio-creaedita',
  templateUrl: './negocio-creaedita.component.html',
  styleUrls: ['./negocio-creaedita.component.css'],
})
export class NegocioCreaeditaComponent implements OnInit {

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
  negocio: Negocio = new Negocio();
  mensaje: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nameNegocio: new FormControl(),
      direccionNegocio: new FormControl(),
      telefono: new FormControl(),
      emailNegocio: new FormControl(),
      tipoNegocio: new FormControl(),
      IDUsuario: new FormControl(),
    });
  }
  constructor(
    private aS: NegocioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  aceptar(): void {
    this.negocio.id = this.form.value['id'];
    this.negocio.nameNegocio = this.form.value['nameNegocio'];
    this.negocio.direccionNegocio = this.form.value['direccionNegocio'];
    this.negocio.telefono = this.form.value['telefono'];
    this.negocio.emailNegocio = this.form.value['emailNegocio'];
    this.negocio.tipoNegocio = this.form.value['tipoNegocio'];
    this.negocio.IDUsuario = this.form.value['IDUsuario'];
    if (
      this.form.value['nameNegocio'].length > 0 &&
      this.form.value['direccionNegocio'].length > 0 &&
      this.form.value['telefono'].length > 0 &&
      this.form.value['emailNegocio'].length > 0 &&
      this.form.value['tipoNegocio'].length > 0 &&
      this.form.value['IDUsuario'].length > 0
    ) {
      if (this.edicion) {
        this.aS.update(this.negocio).subscribe(()=>{
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        this.aS.insert(this.negocio).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }
      this.router.navigate(['negocios']);
    } else {
      this.mensaje = 'Ingrese los datos del negocio';
    }
  }
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameNegocio: new FormControl(data.nameNegocio),
          direccionNegocio: new FormControl(data.direccionNegocio),
          telefono: new FormControl(data.telefono),
          emailNegocio: new FormControl(data.emailNegocio),
          tipoNegocio: new FormControl(data.tipoNegocio),
          IDUsuario: new FormControl(data.IDUsuario),
        });
      });
    }
  }
}