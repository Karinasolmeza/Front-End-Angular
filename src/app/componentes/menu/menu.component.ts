import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 // usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones
  //isUserLogged: boolean;
  
  //isUserLogged: boolean;
  usuarioAutenticado: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioAutenticado = this.authService.usuarioAutenticado();
  }

    logout(): void {
    this.authService.logout();
    this.usuarioAutenticado = false;
    window.location.reload();
  }
}