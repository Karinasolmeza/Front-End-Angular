import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosPorfolio:ProyectosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["projects"];
    });
  }

}
