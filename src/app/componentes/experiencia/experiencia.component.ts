import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperiencialaboralService } from 'src/app/servicios/experiencialaboral.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experienciaList!:Experiencia[];
form:FormGroup;
accion = 'Agregar';
id: number | undefined;
usuarioAutenticado:boolean=true;//debe ir en false para ocultar botones 

  constructor(private miServicio:ExperiencialaboralService,  private miFormBuilder:FormBuilder, private toastr: ToastrService,) {
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
 this.obtenerExperiencia();

  }


  obtenerExperiencia() {
    this.miServicio.getListExperiencia().subscribe(data => {
   
      this.experienciaList = data;
      
    }, error => {
      console.log(error);
    })
  }
 







guardarExperiencia(){

  const experiencia: any={

     tipoExperiencia: this.form.get("tipoExperiencia")?.value,
     empresa: this.form.get("empresa")?.value,
     detallesDeExperiencia:this.form.get("detallesDeExperiencia")?.value,
     idPersona:this.form.get("idPersona")?.value,
    
  }

  if (this.id == undefined) {
    // Agregamos una nueva experiencia
      this.miServicio.saveExperiencia(experiencia).subscribe(data => {
        this.toastr.success('Experiencia registrada con exito!', 'Experiencia Registrada');
        this.obtenerExperiencia();
        this.form.reset();
      }, error => {
        this.toastr.error('Opss.. ocurrio un error','Error')
        console.log(error);
      })
  } else {

    experiencia.id = this.id;
    // Editamos experiencia
      this.miServicio.updateExperiencia(this.id,experiencia).subscribe(data => {
      this.form.reset();
      this.accion = 'Agregar';
      this.id = undefined;
      this.toastr.info('La tarjeta fue actualizada con exito!', 'Tarjeta Actualizada');
      this.obtenerExperiencia();
    }, error => {
      console.log(error);
    })

  }

 
}

editarExperiencia(experiencia: any) {
  this.accion = 'Editar';
  this.id = experiencia.id;
  

  this.form.patchValue({
   
    tipoExperiencia: experiencia.tipoExperiencia,
    empresa: experiencia.empresa,
    detallesDeExperiencia: experiencia.detallesDeExperiencia,
  // idPersona:educacion.idPersona,
  })
}



eliminarExperiencia(id: number){

this.miServicio.deleteExperiencia(id).subscribe(data=>{
  this.toastr.error( 'Experiencia fue eliminada con exito!','Experiencia eliminada');
  this.obtenerExperiencia();
})
}


}
