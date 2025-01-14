import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css'],
})
export class UsuarioCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();

  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      pais: new FormControl(),     
      fecha: new FormControl(),     
      biografia: new FormControl()
    });
  }

  constructor(
    private uS: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  aceptar(): void {
    this.usuario.id = this.form.value['id'];
    this.usuario.nombre = this.form.value['nombre'];
    this.usuario.pais = this.form.value['pais'];
    this.usuario.fecha = this.form.value['fecha'];
    this.usuario.biografia = this.form.value['biografia'];

    var regex = /^[A-Za-z\s]+$/;

    if (
      regex.test(this.form.value['nombre']) && this.form.value['nombre'].length <= 50 &&
      this.form.value['nombre'].length > 0 &&
      regex.test(this.form.value['pais']) && this.form.value['pais'].length <= 15 &&
      this.form.value['pais'].length > 0 &&
      regex.test(this.form.value['biografia']) && this.form.value['biografia'].length <= 200 &&
      this.form.value['biografia'].length > 0
    ) {
      if (this.edicion) {
        this.uS.update(this.usuario).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        this.uS.insert(this.usuario).subscribe((data) => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['usuarios']);
    } else {
      this.mensaje = 'Ingrese los datos del usuario';
    }
  }

  init() {
    if (this.edicion) {
      this.uS.listID(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          pais: new FormControl(data.pais),
          emailUsuario: new FormControl(data.biografia)
        });
      });
    }
  }
}