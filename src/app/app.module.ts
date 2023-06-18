import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './component/cliente/cliente.component';
import { ComprasComponent } from './component/compras/ComprasComponent';
import { NegocioComponent } from './component/negocio/negocio.component';
import { DestinoComponent } from './component/destino/destino.component';
import { UsuarioComponent } from './component/usuario/usuario.component';

import { ClienteListarComponent } from './component/cliente/cliente-listar/cliente-listar.component';
import { ComprasListarComponent } from './component/compras/compras-listar/compras-listar.component';
import { NegocioListarComponent } from './component/negocio/negocio-listar/negocio-listar.component';
import { DestinoListarComponent } from './component/destino/destino-listar/destino-listar.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';

import { ClienteCreaeditaComponent } from './component/cliente/cliente-creaedita/cliente-creaedita.component';
import { ComprasCreaeditaComponent } from './component/compras/compras-creaedita/compras-creaedita.component';
import { NegocioCreaeditaComponent } from './component/negocio/negocio-creaedita/negocio-creaedita.component';
import { DestinoCreaeditaComponent } from './component/destino/destino-creaedita/destino-creaedita.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';

import { ClienteDialogoComponent } from './component/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { ComprasDialogoComponent } from './component/compras/compras-listar/compras-dialogo/compras-dialogo.component';
import { NegocioDialogoComponent } from './component/negocio/negocio-listar/negocio-dialogo/negocio-dialogo.component';
import { DestinoDialogoComponent } from './component/destino/destino-listar/destino-dialogo/destino-dialogo.component';
import { UsuarioDialogoComponent } from './component/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './component/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LandingPageComponent } from './component/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteListarComponent,
    ClienteCreaeditaComponent,
    MenuComponent,
    ClienteDialogoComponent,

    ComprasComponent,
    ComprasListarComponent,
    ComprasCreaeditaComponent,
    ComprasDialogoComponent,

    NegocioComponent,
    NegocioListarComponent,
    NegocioCreaeditaComponent,
    NegocioDialogoComponent,

    DestinoComponent,
    DestinoListarComponent,
    DestinoCreaeditaComponent,
    DestinoDialogoComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent,
    LandingPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
