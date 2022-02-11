import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacionlist:any;
form:FormGroup;
usuarioAutenticado:boolean=true;//debe ir en falso para ocultar botones 
  

  constructor(private datosPorfolio:EducacionService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      title:['',[Validators.required]],
      school:['',[Validators.required]],
      resume:['',[Validators.required]]
    })
   }
get title()
{return this.form.get("title")
}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educacionlist=data.education;
    });
  }
guardarEducacion(){
  if(this.form.valid){
    alert("Enviar al backend (servicio)");
    this.form.reset();
    document.getElementById("cerrarModalEducacion")?.click();
  }
  else
  {
alert("Error");
this.form.markAllAsTouched();
  }
}

}
