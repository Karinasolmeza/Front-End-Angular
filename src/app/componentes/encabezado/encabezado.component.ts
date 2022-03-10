import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Encabezado } from 'src/app/entidades/encabezado';

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
    let url=this.form.controls["url"].value;
  
    let encabezadoEditar=new Encabezado(fullName,tituloEncabezado,url);
  
  this.datosPorfolio.editarDatosEncabezado(encabezadoEditar).subscribe(data=>{
    this.miPorfolio=encabezadoEditar;
    this.form.reset();
  document.getElementById("cerrarModalEncabezado")?.click();
  },

  error => {
    alert("upss, contacte al administrador");

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
  this.form.controls["avatarImg"].setValue(this.miPorfolio.avatarImg)
  
}
}

