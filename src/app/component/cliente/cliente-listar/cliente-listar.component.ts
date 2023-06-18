import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import { Cliente } from 'src/app/model/clientes';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import {MatPaginator} from '@angular/material/paginator';
import { ClienteDialogoComponent } from './cliente-dialogo/cliente-dialogo.component';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})

export class ClienteListarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  reason = '';
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = true;
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  lista: Cliente[] = []
  idMayor: number = 0
  displayedColumns:string[]=['Codigo','Nombre','Apellido','Facultad','Carrera','dni','Telefono','Direccion','ID_Login','accion01','acciones2']

  constructor(private cS: ClienteService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.cS.list().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
    })
    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    
      this.cS.getConfirmDelete().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      })
    
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ClienteDialogoComponent);
  }
  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);
      })
    })
  }
  filtrar(z: any) {
    this.dataSource.filter = z.target.value.trim();
  }
}
