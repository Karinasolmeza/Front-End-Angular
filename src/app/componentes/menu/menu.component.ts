import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones
  constructor() { }

  ngOnInit(): void {
  }

}
