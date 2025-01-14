import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Negocio } from 'src/app/model/negocio';
import { NegocioService } from 'src/app/service/negocio.service';
import { MatTableDataSource } from '@angular/material/table';
import { NegocioDialogoComponent } from './negocio-dialogo/negocio-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css'],
})
export class NegocioListarComponent implements OnInit,AfterViewInit {
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

  lista: Negocio[] = []
  dataSource: MatTableDataSource<Negocio> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id', 'Titulo', 'Descripcion','Estado','Fecha','Genero','Editorial','accion01','accion02'];

  constructor(private uS: NegocioService,private dialog:MatDialog) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.uS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }  
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(NegocioDialogoComponent);
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
      })
    })
  }

  filter(z:any){
this.dataSource.filter= z.target.value.trim();
  }
}
export class PaginatorOverviewExample {}