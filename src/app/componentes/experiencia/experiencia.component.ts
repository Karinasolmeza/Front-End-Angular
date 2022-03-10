import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
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
guardarExperiencia(){
     if(this.form.valid){

    let tipoExperiencia=this.form.controls["tipoExperiencia"].value;
    let empresa=this.form.controls["empresa"].value;
    let detallesDeExperiencia=this.form.controls["detallesDeExperiencia"].value;
    let experienciaEditar=new Experiencia(tipoExperiencia, empresa, detallesDeExperiencia);
  
  

  this.datosPorfolio.editarDatosExperiencia(experienciaEditar).subscribe(data=>{
    this.miPorfolio=experienciaEditar;
    this.form.reset();
    document.getElementById("cerrarModalEncabezado")?.click();
  

  })
  }

else
{
  
  this.form.markAllAsTouched();
}

}

mostrarDatosExperiencia(){
  this.form.controls["tipoExperiencia"].setValue(this.miPorfolio.tipoExperiencia);
  this.form.controls["empresa"].setValue(this.miPorfolio.empresa);
  this.form.controls["detallesDeExperiencia"].setValue(this.miPorfolio.detallesDeExperiencia);
}

}
