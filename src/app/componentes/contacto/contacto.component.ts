import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/entidades/contact';
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
      let nameUbication=this.form.controls["nameUbication"].value;
      let mail=this.form.controls["mail"].value;
      let contactEditar=new Contact(nameUbication,mail);
    
    
  
    this.datosPorfolio.editarDatosContact(contactEditar).subscribe(data=>{
      this.miPorfolio=contactEditar;
      this.form.reset();
      document.getElementById("cerrarModalContacto")?.click();
    
  
    })
    }
  
  else
  {
    
    this.form.markAllAsTouched();
  }
  
  }
  
  mostrarDatosContact(){
    this.form.controls["nameUbication"].setValue(this.miPorfolio.nameUbication);
    this.form.controls["mail"].setValue(this.miPorfolio.mail);
  
  }
  
  }
  