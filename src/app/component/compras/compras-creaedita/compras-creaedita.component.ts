import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { compras } from 'src/app/model/compras';
import * as moment from 'moment';
import { ComprasService } from 'src/app/service/compras.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-compras-creaedita',
  templateUrl: './compras-creaedita.component.html',
  styleUrls: ['./compras-creaedita.component.css'],
})
export class ComprasCreaeditaComponent implements OnInit {
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
  compras: compras = new compras();
  mensaje: string = '';
  fechaPControl!: FormControl;
  fecha_min: Date = new Date();
  fecha_max: Date = new Date();
  // fecha_max: Date = moment(this.fecha_min).add(14, 'days').toDate();

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.fechaPControl = this.form.get('FechaP') as FormControl;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      cantidad: new FormControl(),
      precio_total: new FormControl(),
      descripcion: new FormControl(),
      fecha: new FormControl(),
      Cliente_ID: new FormControl(),
      Negocio_ID: new FormControl(),
      FechaD: new FormControl(),
      FechaP: new FormControl(),
    });

    this.form.get('FechaP')?.valueChanges.subscribe((fechaP: Date) => {
      this.form.get('FechaD')?.setValue(null);
      this.fecha_min = fechaP;
      this.fecha_max = moment(fechaP).add(14, 'days').toDate();
      this.form.get('FechaD')?.setValidators([
        Validators.min(this.fecha_min.valueOf()),
        Validators.max(this.fecha_max.valueOf())
      ]);
    });
  }

  constructor(
    private cS: ComprasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  aceptar(): void {
    this.compras.id = this.form.value['id'];
    this.compras.fechap = this.form.value['FechaP'];
    this.compras.fechad = this.form.value['FechaD'];
    this.compras.descripcion = this.form.value['descripcion'];
    this.compras.fecha = this.form.value['fecha'];
    this.compras.Cliente_ID = this.form.value['Cliente_ID'];
    this.compras.Negocio_ID = this.form.value['Negocio_ID'];

    var regex = /^[A-Za-z\s]+$/;

    if (
      (this.form.value['descripcion'] === 'pendiente' ||
        this.form.value['descripcion'] === 'libre') &&
      this.compras.fechad.getDate() - this.compras.fechap.getDate() <= 14 &&
      this.compras.fechad.getDate() - this.compras.fechap.getDate() >= 0
    ) {
      console.log('Entro esta vaina');
      if (this.edicion) {
        this.cS.update(this.compras).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.compras).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['compras']);
    } else {
      this.mensaje = 'No se puede guardar el prestamo';
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          fechap: new FormControl(data.fechap),
          fechad: new FormControl(data.fechad),
          descripcion: new FormControl(data.descripcion),
          fecha: new FormControl(data.fecha),
          Cliente_ID: new FormControl(data.Cliente_ID),
          Negocio_ID: new FormControl(data.Negocio_ID),
        });
      });
    }
  }
}
