import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Cliente } from 'src/app/model/clientes';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ClienteDialogoComponent } from './cliente-dialogo/cliente-dialogo.component';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css'],
})
export class ClienteListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('sidenav') sidenav!: MatSidenav;


  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  

  constructor(private cS: ClienteService, private dialog: MatDialog) {

    this.montoPrestamo = 0;
    this.tasaInteres = 0;
    this.plazoMeses = 0;
    this.periodoGracia = '';

   }

  ngOnInit(): void {
    this.montoPrestamo = 0;
    this.tasaInteres = 0;
    this.plazoMeses = 0;
    this.periodoGracia = '';
  }

  montoPrestamo: number;
  tasaInteres: number;
  plazoMeses: number;
  periodoGracia: string;

  cuotas: any[] = [];

  calcular() {

    let capital = this.montoPrestamo;
    let tasaMensual = this.tasaInteres / 100 / 12;
    let meses = this.plazoMeses;

    let saldo = capital;
    let pgTotal = this.periodoGracia === 'total';
    let pgParcial = this.periodoGracia === 'parcial';

    this.cuotas = [];

    for(let i=1; i<=meses; i++) {

      let interes = saldo * tasaMensual;
      let cuota = capital * (tasaMensual * Math.pow(1 + tasaMensual, meses - i)) / ( Math.pow(1 + tasaMensual, meses - i) - 1);

      let amortizacion = cuota - interes;
      saldo = saldo - amortizacion;

      if(pgTotal && i === 1) {
        amortizacion = 0;
      }

      if(pgParcial && i <= 2) {
        amortizacion = 0;
      }

      this.cuotas.push({
        numero: i,
        interes: interes,
        amortizacion: amortizacion,
        cuota: cuota,
        saldo: saldo
      });

    }

  }
  
  
}
