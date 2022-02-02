import { Component, OnInit } from '@angular/core';
import { ExperiencialaboralService } from 'src/app/servicios/experiencialaboral.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miPorfolio:any;
  constructor(private datosPorfolio:ExperiencialaboralService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["experiencia"];
    });
  }

}
