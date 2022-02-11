import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperiencialaboralService } from 'src/app/servicios/experiencialaboral.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miPorfolio:any;
form:FormGroup;
usuarioAutenticado:boolean=true;//debe ir en false para ocultar botones 

  constructor(private datosPorfolio:ExperiencialaboralService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
tipoExperiencia:['',[Validators.required,Validators.minLength(10)]],
empresa:['',[Validators.required]],
detallesDeExperiencia:['',[Validators.required]]
    })
   }

   get tipoExperiencia()
     {
       return this.form.get("tipoExperiencia")
     }
   

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["experiencia"];
    });
  }
guardarexperiencia(){
  if(this.form.valid){
    alert("enviar al backend(servicio)");
  this.form.reset();
  document.getElementById("cerrarModalExperiencia")?.click();

  }
else
{
  alert("error");
  this.form.markAllAsTouched();
}
}


}
