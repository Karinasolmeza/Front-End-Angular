import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from 'src/app/servicios/about.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

miPorfolio:any;
form:FormGroup;
usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones

  constructor(private datosPorfolio:AboutService,  private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      acercaDe:['',[Validators.required,Validators.minLength(10)]]
    })
   }
   get acercaDe()
{
  return this.form.get("acercaDe")
}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
this.miPorfolio=data["aboutMe"];

    });
  }
  guardarAcercaDe(){
    if(this.form.valid){
      alert("Enviar al backend (servicio)");
      this.form.reset();
      document.getElementById("cerrarAcercaDeModal")?.click();
    }
    else
    {
      alert("Error");
      this.form.markAllAsTouched();
    }
    }
  }



