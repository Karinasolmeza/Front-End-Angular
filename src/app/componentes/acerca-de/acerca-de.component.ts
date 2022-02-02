import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/servicios/about.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

miPorfolio:any;

  constructor(private datosPorfolio:AboutService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
this.miPorfolio=data["aboutMe"];

    });
  }

}

