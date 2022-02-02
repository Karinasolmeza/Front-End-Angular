import { Component, OnInit } from '@angular/core';
import { ContactodatosService } from 'src/app/servicios/contactodatos.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
miPorfolio:any;
  constructor(private datosPorfolio:ContactodatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["contact"];
    });
  }

}
