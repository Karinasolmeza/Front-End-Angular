import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
usuarioVerificado:boolean=true;//dede estar en false
  constructor() { }

  ngOnInit(): void {
  }

}
