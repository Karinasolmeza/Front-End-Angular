import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Persona } from 'src/app/entidades/persona';



import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
miPorfolio:any;
form:FormGroup;
usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones

  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      tituloEncabezado:['',[Validators.required]],
      url:['https://',[Validators.required]]
    })
   }

   get fullName()
   {
     return this.form.get("fullName")

   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["encabezado"];
  });
  
}

guardarEncabezado(){
  if(this.form.valid){
  
    let fullName=this.form.controls["fullName"].value;
    let tituloEncabezado=this.form.controls["tituloEncabezado"].value;
    let avatarImg=this.form.controls["avatarImg"].value;
  
    let personaEditar=new Persona(fullName,tituloEncabezado,avatarImg);
  
  
  
   
  
  this.datosPorfolio.editarDatosEncabezado(personaEditar).subscribe(data=>{
    this.miPorfolio=personaEditar;
    this.form.reset();
  document.getElementById("cerrarModalEncabezado")?.click();
  
  
  })
  }
  
  else
  {
  
  this.form.markAllAsTouched();
  }
  
  

}
mostrarDatosEncabezado(){
  this.form.controls["fullName"].setValue(this.miPorfolio.fullName);
  this.form.controls["tituloEncabezado"].setValue(this.miPorfolio.tituloEncabezado);
  this.form.controls["avatarImg"].setValue(this.miPorfolio.avatarImg);
}
}

