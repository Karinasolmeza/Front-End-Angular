import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  alert("Enviar al backend (servicio)");
  this.form.reset();
  document.getElementById("cerrarModalEncabezado")?.click();
}
else
{
  alert("ERROR");
  this.form.markAllAsTouched();
}

}
}

