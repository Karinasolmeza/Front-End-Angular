import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miPorfolio:any;
  form:FormGroup;
  usuarioAutenticado:boolean=true;//debe ir en falso para ocultar botones 

  constructor(private datosPorfolio:ProyectosService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
      url:['https://',[Validators.required]]
    })
   }
get name()
{
  return this.form.get("name")

}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["projects"];
    });
  }
  guardarProyectos(){
    if(this.form.valid){
      alert("enviar al backend (servicio)");
      this.form.reset();
      document.getElementById("cerrarModalProyectos")?.click();
    }
    else{
      alert("ERROR");
    this.form.markAllAsTouched();
    }

    }
  }


