import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactodatosService } from 'src/app/servicios/contactodatos.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
miPorfolio:any;
form:FormGroup;
usuarioAutenticado:boolean=true; //debe ir en falso para ocultar los botones


  constructor(private datosPorfolio:ContactodatosService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      nameUbication:['',[Validators.required]],
      mail:['',[Validators.required]]
    })
   }

   get nameUbication()
   {
     return this.form.get("nameUbication")
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data["contact"];
    });
  }
  guardarContacto(){
    if(this.form.valid){
      alert("Enviar al backend (servicio)");
      this.form.reset();
      document.getElementById("cerrarModalContacto")?.click();
    }
    else
    {
      alert("Error");
      this.form.markAllAsTouched();
    }
    }
  }


