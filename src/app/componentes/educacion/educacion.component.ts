import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entidades/educacion';
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
get title(){
  return this.form.get("title")
}
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educacionlist=data.education;
    });
  }
guardarEducacion(){
  if(this.form.valid){

    let title=this.form.controls["title"].value;
    let school=this.form.controls["school"].value;
    let resume=this.form.controls["resume"].value;
    let educacionEditar=new Educacion(title, school, resume);


    this.datosPorfolio.editarDatosEducacion(educacionEditar).subscribe(data=>{
      this.educacionlist=educacionEditar;
      this.form.reset();
      document.getElementById("cerrarModalEncabezado")?.click();
    
  
    })
    }
  
  else
  {
    
    this.form.markAllAsTouched();
  }
  
  }
  
  mostrarDatosEducacion(){
    this.form.controls["title"].setValue(this.educacionlist.title);
    this.form.controls["school"].setValue(this.educacionlist.school);
    this.form.controls["resume"].setValue(this.educacionlist.resume);
  }
  
  }
  