import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {

  constructor(
    private router: Router,
  ) { }

  usuario = '';
  password = '';
  mostrarForm = false;

  mostrarLogin() {
    this.mostrarForm = true;
  }

  login() {
    if(this.usuario === 'jadid' && this.password === '1234') {
      this.router.navigate(['/clientes']);
    }
  }

}
