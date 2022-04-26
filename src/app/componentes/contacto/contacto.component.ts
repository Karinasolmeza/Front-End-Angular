import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/entidades/contact';
import { AuthService } from 'src/app/servicios/auth.service';
import { ContactodatosService } from 'src/app/servicios/contactodatos.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
contact!:Contact;
form:FormGroup;
usuarioAutenticado:boolean=false; //debe ir en falso para ocultar los botones


  constructor(private miServicio:ContactodatosService,private authService: AuthService, private miFormBuilder:FormBuilder,private toastr: ToastrService) {
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
    this.usuarioAutenticado = this.authService.usuarioAutenticado();
    this.miServicio.obtenerDatos().subscribe(data =>{
      this.contact=data;
    });
  }
  
  guardarContacto(){

    if(this.form.valid){
    
      let nameUbication=this.form.controls["nameUbication"].value;

      let mail=this.form.controls["mail"].value;

      let contactEditar=new Contact(this.contact.id, nameUbication, mail);
    
    
  
    this.miServicio.editarDatosContact(contactEditar).subscribe(data=>{
      this.contact=contactEditar;
      this.form.reset();
      this.toastr.info('Contacto actualizado con exito!', 'Tarjeta Actualizada');

      document.getElementById("cerrarModalContacto")?.click();
    },
  
    error =>{
      alert("error");
    
      })
      }
  else
  {
    
    this.form.markAllAsTouched();
  }
  
  }
  
  mostrarDatosContact(){
    this.form.controls["nameUbication"].setValue(this.contact.nameUbication);
    this.form.controls["mail"].setValue(this.contact.mail);
  
  }
  
  }
  